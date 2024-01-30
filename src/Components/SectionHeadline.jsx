import React from "react";

const SectionHeadline = ({ children }) => {
  return (
    <div className="flex justify-between items-center gap-3 py-12 px-3 lg:px-16 ">
      <hr className="border-2 border-black w-[40%]" />
      <h1 className="text-5xl font-semibold">{children}</h1>
      <hr className="border-2 border-black w-[40%]" />
    </div>
  );
};

export default SectionHeadline;
