import React from "react";

const InputField = ({ children, ...rest }) => {
  return (
    <div className="space-y-2 text-sm">
      <label>{children}</label>
      <input
        {...rest}
        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none   "
      />
    </div>
  );
};

export default InputField;
