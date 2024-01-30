import React from "react";

const TextEffect = ({ text }) => {
  //   const text = children;
  const textArr = text.split("");
  return (
    <h1 className="textEffect1 text-lg md:text-2xl lg:text-[40px] font-black lg:leading-10	">
      {textArr.map((letter, inx) => (
        <span key={inx}>{letter}</span>
      ))}
    </h1>
  );
};

export default TextEffect;
