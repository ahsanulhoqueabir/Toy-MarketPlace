import React from "react";
import cn from "../utilities/cn";

const InputField = ({ children, className, ...rest }) => {
  return (
    <div className="space-y-2 text-sm">
      <label>{children}</label>
      <input
        {...rest}
        className={cn(
          "w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none   ",
          className
        )}
      />
    </div>
  );
};

export default InputField;
