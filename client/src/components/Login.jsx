import { useRef, useState } from "react";
import Header from "./Header";
import { validateSignIn } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { updateUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validateSignIn(
      isSignInForm,
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setErrMessage(errorMessage);
    if (errorMessage) return;

    if (isSignInForm) {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setErrMessage("Invalid Credentials!");
          }
          console.log("errorMessage", errorMessage);
        });
    } else {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { displayName } = auth.currentUser;
              dispatch(updateUser({ displayName }));
            })
            .catch((error) => {
              console.log("Error in updating profile", error);
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/email-already-in-use") {
            setErrMessage("Email already in use!");
          }
          console.log("errorMessage", errorMessage);
        });
    }

  };
  return (
    <div
      // style={{
      //   "--image-url": `url(https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg)`,
      // }}
      // className="bg-[image:var(--image-url)] h-screen"
      className="h-screen"
    >
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
        className="absolute object-cover h-full w-full z-0"
      />
      <Header />
      <form className="w-4/5 md:w-1/3 mx-auto bg-black/80 h-5/6 flex flex-col px-8 md:px-20 rounded-md pt-16 relative top-20">
        <h1 className="text-white font-semibold text-3xl pb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="flex flex-col gap-4">
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="text-white p-3 bg-transparent border border-gray-400 rounded-md focus:outline-none placeholder:text-gray-400 target:text-white"
          />
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="text-white p-3 bg-transparent border border-gray-400 rounded-md focus:outline-none placeholder:text-gray-400 target:text-white"
            />
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="text-white p-3 bg-transparent border border-gray-400 rounded-md focus:outline-none placeholder:text-gray-400"
          />
          {errMessage && (
            <span className="text-rose-500 text-sm font-bold">
              {errMessage}
            </span>
          )}
          <button
            className="bg-n-red text-white p-3 rounded-md"
            onClick={handleFormSubmit}
          >
            {isSignInForm ? "Sign In" : "Register"}
          </button>
        </div>
        <h4 className="text-gray-400 mt-8">
          {isSignInForm ? "New to Netflix? " : "Already an user? "}
          <span
            className="text-white hover:cursor-pointer hover:underline"
            onClick={() => toggleForm()}
          >
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
          .
        </h4>
      </form>
    </div>
  );
};

export default Login;
