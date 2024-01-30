import React from "react";

const SectionHeadline = ({ children }) => {
  return (
    <div className="flex justify-between items-center gap-3 py-12  ">
      <hr className="border-2 border-black lg:w-full w-[48%]" />
      <h1 className=" lg:text-5xl font-semibold text-center w-full justify-center px-5">
        {children}
      </h1>
      <hr className="border-2 border-black lg:w-full w-[48%]" />
    </div>
  );
};

export default SectionHeadline;
