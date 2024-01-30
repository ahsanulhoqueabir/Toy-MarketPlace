import React from "react";
import cartAni from "../../assets/CartAnimation.json";
import Lottie from "lottie-react";
import cn from "../../utilities/cn";
const CartButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={cn(
        "text-xl capitalize z-20 w-fit px-5 py-2 rounded before:absolute before:block before:inset-0 before:-z-10 before:bg-teal-200 text-black after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-teal-600 after:absolute relative inline-block",
        className
      )}
      {...rest}
    >
      <div className="flex gap-2 items-center justify-center">
        <Lottie className="h-6" animationData={cartAni} /> {children}
      </div>
    </button>
  );
};

export default CartButton;
