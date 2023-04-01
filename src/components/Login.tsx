import React, { useState } from "react";
import { auth } from "../firebaseSetup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthData } from "../shared/type";

type Props = {
  sideBarIsOpen: boolean;
  setSideBarIsOpen: (value: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

const Login = ({ sideBarIsOpen, setSideBarIsOpen, setIsLoggedIn, isLoggedIn }: Props) => {
  // input state
  const [formState, setFormState] = useState<AuthData>({
    email: ``,
    password: ``,
    passwordConfirmation: ``,
  });

  const [authError, setAuthError] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);
  const [isUserCreated, setIsUserCreated] = useState<boolean>(false);

  const { email, password, passwordConfirmation } = formState;

  const handleChange = (e: any) => {
    let passwordError = "";

    console.log(e.target.value);

    if (e.target.id === "password" && password.length < 7) {
      passwordError = "Password should be more than 8 characters";
    }

    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  // SignUp User
  const createUser = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignUp = () => {
    if (formState.password === formState.passwordConfirmation && formState.email !== "") {
      createUser(formState.email, formState.password);
      setFormState({
        email: ``,
        password: ``,
        passwordConfirmation: ``,
      });
      setIsUserCreated(true);
      setSignUp(false);
    }
  };

  // SignIn User
  const signInUser = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (user) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error.code);

        const errorCode = error.code;
        const errorMessage = error.message;

        if (error) {
          setFormState({
            email: ``,
            password: ``,
            passwordConfirmation: ``,
          });
          setAuthError(true);
          setSignUp(true);
          setInterval(() => {
            setAuthError(false);
          }, 5000);
        }
      });
  };

  return (
    <div className={`${sideBarIsOpen ? "right-0" : "-right-full"} w-full bg-white  fixed h-full  shadow-2xl md:w-[40vw] z-20 px-4 lg:px-[35px] `}>
      <div className="flex items-center justify-between py-6 border-b flex-col gap-y-3">
        <p className="text-center">Please login to add to cart</p>
        <input
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium "
          type="text"
          placeholder="Email"
          id="email"
          value={formState.email}
          onChange={() => handleChange(event)}
        />
        <input
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium "
          type="text"
          placeholder="Password"
          id="password"
          value={formState.password}
          onChange={() => handleChange(event)}
        />
        {signUp && (
          <input
            className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium "
            type="text"
            placeholder="Confirm Password"
            id="passwordConfirmation"
            value={formState.passwordConfirmation}
            onChange={() => handleChange(event)}
          />
        )}
        <button
          className="bg-primary text-gray-200 flex p-4 justify-center items-center w-full font-medium "
          onClick={() => {
            signInUser(formState.email, formState.password);
          }}>
          Login
        </button>
        {signUp && (
          <div className="flex flex-col justify-center items-center w-full gap-y-3">
            <p className="font-medium text-2xl">or</p>
            <button
              className="bg-primary text-gray-200 flex p-4 justify-center items-center w-full font-medium "
              onClick={handleSignUp}>
              Signup
            </button>
          </div>
        )}
        {authError && <div>Invalid Userid or Password</div>}
        {isUserCreated && <div>User Created Successfully</div>}
      </div>
      <div className="flex flex-col items-center">
        <p>
          Please{" "}
          <span
            className="text-blue-700 underline text-center cursor-pointer"
            onClick={() => setSignUp(true)}>
            SignUp
          </span>{" "}
          if you don't have an account
        </p>
      </div>
    </div>
  );
};

export default Login;
{
  /* <div onClick={() => createUser("danesh.tolani@gmail.com", "danes@123")}>Login</div> */
}
