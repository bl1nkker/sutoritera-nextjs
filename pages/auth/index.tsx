import Head from "next/head";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  useSignInUserMutation,
  useSignUpUserMutation,
} from "../../generated/graphqlComponents";

interface ICredentialsInput {
  email: string;
  password: string;
  name?: string;
  avatar?: string;
}

export default function Home() {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const [userCredentials, setUserCredentials] = useState<ICredentialsInput>({
    email: "",
    password: "",
    avatar: "",
    name: "",
  });
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
  const handleToggle = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    setIsSignIn(!isSignIn);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    if (isSignIn) {
      const response = await signInUserMutation();
      console.log(response);
    } else {
      const response = await signUpUserMutation();
      console.log(response);
    }
    console.log(userCredentials);
  };
  return (
    <div>
      <Head>
        <title>Auth</title>
      </Head>

      <form>
        <button onClick={(event) => handleToggle(event)}>Toggle Auth</button>
        <br />
        {!isSignIn && (
          <>
            <label>Name</label>
            <input
              value={userCredentials.name}
              name="name"
              type="text"
              onChange={(event) => handleChange(event)}
              placeholder="Input your name here..."
            />
            <br />
            <label>Avatar</label>
            <input
              value={userCredentials.avatar}
              name="avatar"
              type="text"
              onChange={(event) => handleChange(event)}
              placeholder="Upload your avatar here..."
            />
            <br />
          </>
        )}
        <label>Email</label>
        <input
          value={userCredentials.email}
          name="email"
          type="email"
          onChange={(event) => handleChange(event)}
          placeholder="Input your email here..."
        />
        <br />
        <label>Password</label>
        <input
          autoComplete="current-password"
          value={userCredentials.password}
          name="password"
          type="password"
          onChange={(event) => handleChange(event)}
          placeholder="Input your password here..."
        />
        <br />
        <button onClick={(event) => handleSubmit(event)}>Submit!</button>
      </form>
    </div>
  );
}
