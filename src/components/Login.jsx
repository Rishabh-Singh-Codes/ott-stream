import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div
      style={{
        "--image-url": `url(https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg)`,
      }}
      className="bg-[image:var(--image-url)] h-screen"
    >
      <Header />
      <form className="w-1/3 m-auto bg-black/80 h-5/6 flex flex-col px-20 rounded-md pt-16">
        <h1 className="text-white font-semibold text-3xl pb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email"
            className="text-white p-3 bg-transparent border border-gray-400 rounded-md focus:outline-none placeholder:text-gray-400 target:text-white"
          />
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="text-white p-3 bg-transparent border border-gray-400 rounded-md focus:outline-none placeholder:text-gray-400 target:text-white"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="text-white p-3 bg-transparent border border-gray-400 rounded-md focus:outline-none placeholder:text-gray-400"
          />
          <button className="bg-n-red text-white p-3 rounded-md">
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
