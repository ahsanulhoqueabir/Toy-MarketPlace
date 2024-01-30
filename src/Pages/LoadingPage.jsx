import Lottie from "lottie-react";
import anim from "../assets/cube.json";
const LoadingPage = () => {
  return (
    <div className="flex justify-center h-[calc(100vh-72px)] items-center">
      <Lottie animationData={anim} className="h-72"></Lottie>
    </div>
  );
};

export default LoadingPage;
