import { useState } from "react";
import TextEffect from "../../Components/TextEffect";

export const CarouselMain = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://i.ibb.co/Tb1rkY2/photo-1587654780291-39c9404d746b-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    },
    {
      img: "https://i.ibb.co/r407QV4/photo-1566576912321-d58ddd7a6088-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    },
    {
      img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  return (
    <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
      {/* arrow */}
      <button
        onClick={nextSlider}
        className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite "
      >
        <svg
          viewBox="0 0 1024 1024"
          className="w-4 h-4 md:w-6 md:h-6 icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(180)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>
      {/* slider container */}
      <div
        className="ease-linear duration-300 flex gap-[2%]"
        style={{ transform: `translateX(-${currentSlider * 52}%)` }}
      >
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <div
            key={inx}
            className={`${
              currentSlider === inx
                ? "h-[310px] md:h-[310px] lg:h-[580px] "
                : "h-[260px] md:h-[280px] lg:h-[480px]"
            } min-w-[50%] bg-black/30 relative duration-200`}
          >
            <img
              src={slide.img}
              className="w-full object-cover h-full"
              alt="kids"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Banner = () => {
  const title =
    "Playful treasures await — where dreams meet toys, imagination takes flight.";
  const splittedTitle = title.split("");
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      className=" mx-auto h-[540px] lg:h-[670px]  flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative"
    >
      <div className=" w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
      <div className="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
        <TextEffect text={title}> </TextEffect>
        <p className="text-[#616161] text-xs md:text-lg">
          Explore joy at our Kids Toy Marketplace — where laughter meets
          learning, and every toy sparks imagination. Find the perfect playmate
          for endless childhood adventures in our vibrant wonderland.
        </p>
        <button className="font-bold py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#2f9fb8]">
          Explore More
        </button>
      </div>
      <CarouselMain />
    </div>
  );
};
