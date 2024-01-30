import React from "react";
import { Link } from "react-router-dom";
import ExploreButton from "../Components/ExploreButton";
import GoogleSignIn from "../Components/GoogleSignIn";
import Button from "../Components/Button";
import animation from "../assets/loginanimation.json";
import Lottie from "lottie-react";

const LogIn = () => {
  return (
    <>
      <div className="lg:my-20 p-5 my-5 flex-col md:flex-row flex gap-5 lg:mx-20">
        <div className="">
          <Lottie animationData={animation}></Lottie>
        </div>

        <div className=" w-full max-w-md p-8 space-y-3 rounded-xl border bg-white shadow-lg shadow-teal-300  font-sans mx-auto">
          <h1 className="text-3xl font-bold text-center text-blue-400">
            Login
          </h1>
          {/* Input fields and the form started */}
          <form action="" className="space-y-6">
            <div className="space-y-2 text-sm">
              <label htmlFor="username" className="block ">
                Your name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none   "
              />
            </div>
            <div className="space-y-2 text-sm">
              <label htmlFor="password" className="block ">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none   "
              />
              <div className="flex text-xs ">
                <Link to="/signup" className="hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <ExploreButton className={"w-full"}>Log In</ExploreButton>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          {/* Social icons */}
          <div className="flex justify-center py-3">
            <GoogleSignIn></GoogleSignIn>
          </div>
          <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
            Don't have an account?
            <Link to="/signup" className="underline hover:text-indigo-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="pb-10 flex justify-center">
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </>
  );
};

export default LogIn;
