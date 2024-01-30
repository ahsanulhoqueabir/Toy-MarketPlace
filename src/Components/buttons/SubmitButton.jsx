import cn from "../../utilities/cn";

const SubmitButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={cn(
        "text-xl w-fit px-5  py-2 z-30 bg-sky-400 transform hover:text-white text-sky-700 hover:scale-105 hover:bg-sky-700 bg-transparent border-2 border-sky-700 duration-500",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
