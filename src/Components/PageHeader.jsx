import React from "react";
import ani1 from "../assets/Loder1.json";
import ani2 from "../assets/Loader2.json";
import cube from "../assets/cube.json";
import Lottie from "lottie-react";
const PageHeader = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center h-60 bg-blue-100  px-10">
      <h1 className="text-3xl lg:text-5xl font-bold text-center py-10">
        {children}
      </h1>
      <div className="absolute bottom-0 left-0 lg:px-20">
        <Lottie
          animationData={ani1}
          className="h-20 lg:h-36 opacity-55"
        ></Lottie>
      </div>
      <div className="absolute translate-x-2/3 opacity-40">
        <Lottie animationData={cube} className="h-20 lg:h-36 opacity-50"></Lottie>
      </div>
    </div>
  );
};

export default PageHeader;
