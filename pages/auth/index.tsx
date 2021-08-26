import Head from "next/head";
import { MouseEvent, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { AuthForm } from "../../components/authPage/authForm";
import {
  useSignInUserMutation,
  useSignUpUserMutation,
} from "../../generated/graphqlComponents";
import { IAuthCredentialsInput } from "../../interfaces/interfaces";
import validator from "validator";
import { io } from "socket.io-client";

export default function Home() {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [queryError, setQueryError] = useState<string | null>(null);
  const router: NextRouter = useRouter();
  const [userCredentials, setUserCredentials] = useState<IAuthCredentialsInput>(
    {
      email: "",
      password: "",
      avatar: "",
      name: "",
    }
  );

  // GraphQL Mutation
  const [signInUserMutation] = useSignInUserMutation({
    variables: {
      email: userCredentials.email, // value for 'email'
      password: userCredentials.password, // value for 'password'
    },
  });

  const [signUpUserMutation] = useSignUpUserMutation({
    variables: {
      email: userCredentials.email, // value for 'email'
      password: userCredentials.password, // value for 'password'
      name: userCredentials.name, // value for 'name'
      avatar: userCredentials.avatar, // value for 'avatar'
    },
  });

  const handleSubmit = async (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    if (isSignIn) {
      const { data } = await signInUserMutation();
      if (data?.signInUser?.isSuccess === false) {
        // error message
        setQueryError(data?.signInUser?.message as string);
        console.log("Error", data?.signInUser?.message);
      } else {
        // store token and redirect
        router.push("/");
        io("http://localhost:4000", {
          transports: ["websocket", "polling", "flashsocket"],
          query: { userId: data?.signInUser?.result?.id as string },
        });
      }
    } else {
      if (!validator.isEmail(userCredentials.email)) {
        setQueryError("Email is invalid!");
      } else if (
        !validator.isStrongPassword(userCredentials.password, {
          minLength: 8,
          pointsForContainingLower: 10,
          pointsForContainingUpper: 10,
          pointsForContainingNumber: 10,
        })
      ) {
        setQueryError(
          "Please, make password stronger. Your password should contain at least 1 uppercase, 1 lowercase, symbol and number"
        );
      } else {
        const { data } = await signUpUserMutation();
        if (data?.signUpUser?.isSuccess === false) {
          // error message
          setQueryError(data?.signUpUser?.message as string);
          console.log("Error", data?.signUpUser?.message);
        } else {
          // get token and redirect
          router.push("/");
        }
      }
    }
  };
  return (
    <div>
      <Head>
        <title>Auth</title>
      </Head>
      <AuthForm
        queryError={queryError}
        handleSubmit={handleSubmit}
        isSignIn={isSignIn}
        setIsSignIn={setIsSignIn}
        userCredentials={userCredentials}
        setUserCredentials={setUserCredentials}
      />
    </div>
  );
}
