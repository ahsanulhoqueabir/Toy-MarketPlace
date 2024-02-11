import Lottie from "lottie-react";
import React, { useContext } from "react";
import signupanimation from "../assets/signupanimation.json";
import GoogleSignIn from "../Components/GoogleSignIn";
import ExploreButton from "../Components/buttons/ExploreButton";
import { Link } from "react-router-dom";
import InputField from "../Components/InputField";
import { authContext } from "../AuthProvider/AuthProvider";
import { Title } from "../utilities/Title";

const SignUP = () => {
  Title("Sign Up");
  const { signinwithemail, setUser } = useContext(authContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    signinwithemail(email, password)
      .then((res) => {
        const newUser = res.user;
        newUser.displayName = name;
        newUser.photoURL = photo;
        setUser(newUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="lg:my-20 p-5 my-5 flex flex-col-reverse md:flex-row gap-5 lg:mx-20">
      <div className=" w-full max-w-md p-8 space-y-3 rounded-xl border bg-white shadow-lg shadow-teal-300  font-sans mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-400">
          Sign Up
        </h1>
        {/* Input fields and the form started */}
        <form onSubmit={handleSignup} className="space-y-6">
          <InputField type="text" name="name" placeholder="Your Name">
            Name
          </InputField>
          <InputField type="email" name="email" placeholder="Your Email">
            Email
          </InputField>
          <InputField type="password" name="password" placeholder="Password">
            Password
          </InputField>
          <InputField
            type="text"
            name="photo"
            placeholder="Enter your photo URL"
          >
            Photo{" "}
          </InputField>

          <div className="flex justify-center">
            <ExploreButton className={"w-full"}>Sign Up</ExploreButton>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-sm text-gray-600 capitalize">
            Sign In with Social accounts
          </p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        {/* Social icons */}
        <div className="flex justify-center py-3">
          <GoogleSignIn></GoogleSignIn>
        </div>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Have an account?
          <Link to="/login" className="underline hover:text-indigo-600">
            Log in
          </Link>
        </p>
      </div>
      <div>
        <Lottie animationData={signupanimation}></Lottie>
      </div>
    </div>
  );
};

export default SignUP;
