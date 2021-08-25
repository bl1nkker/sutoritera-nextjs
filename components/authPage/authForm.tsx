import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
} from "react";
import { IAuthCredentialsInput } from "../../interfaces/interfaces";

interface Props {
  handleSubmit: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => Promise<void>;
  userCredentials: IAuthCredentialsInput;
  setUserCredentials: Dispatch<SetStateAction<IAuthCredentialsInput>>;
  isSignIn: boolean;
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
  queryError: string | null;
}

export const AuthForm: React.FC<Props> = ({
  handleSubmit,
  isSignIn,
  setIsSignIn,
  userCredentials,
  setUserCredentials,
  queryError,
}) => {
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
  return (
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
      {queryError && <div>{queryError}</div>}
    </form>
  );
};
