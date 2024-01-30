import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ExploreButton from "../Components/buttons/ExploreButton";
import GoogleSignIn from "../Components/GoogleSignIn";
import Button from "../Components/buttons/Button";
import animation from "../assets/loginanimation.json";
import Lottie from "lottie-react";
import { authContext } from "../AuthProvider/AuthProvider";
import InputField from "../Components/InputField";
import { toast } from "react-toastify";

const LogIn = () => {
  const { login } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {from} = location.state || { from: { pathname: "/" } };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const password = form.password.value;
    login(name, password)
      .then((res) => {
        toast(`Welcome Back Mr. ${res.user.displayName}`);
        navigate(from);
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.message);
      });
  };
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
          <form onSubmit={handleLogin} className="space-y-6">
            <InputField type="text" name="username" placeholder="Username">
              {" "}
              Your Name
            </InputField>
            <InputField
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            >
              Your Password
            </InputField>
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
