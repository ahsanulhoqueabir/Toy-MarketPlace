import React from "react";
import { useState } from "react";

const accordionData = [
  {
    title:
      "What are the types of Products available in the Toys & Games category?",
    subtitle:
      " Now you can find here only scientific category includes subcategory of Astronomy,chemsitry and Magnetics",
  },
];
const QNAAccordian = () => {
  const [isActive, setIsActive] = useState(0);
  const handleToggle = (idx) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div className="pt-10 mt-10 bg-teal-200">
      <h2 className="text-3xl text-center font-bold py-10">QnA Section</h2>
      <div className="space-y-4 p-2 md:p-6">
        {accordionData?.map((data, idx) => (
          <div key={idx}>
            {/* header / Title */}
            <div
              onClick={() => handleToggle(idx)}
              className={`px-4 md:px-8 py-6 bg-green-50 border-green-500 border-l-[3px] cursor-pointer`}
            >
              <div className="flex items-center">
                <span>
                  <svg
                    className="mr-4 fill-green-900 shrink-0"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${
                        isActive === idx && "!rotate-180"
                      }`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        isActive === idx && "!rotate-180"
                      }`}
                    />
                  </svg>
                </span>
                <h4 className="text-green-900 text-xl">{data.title}</h4>
              </div>
            </div>
            {/* body / content  */}
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
                isActive === idx
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm text-green-900 bg-green-50 border-green-500">
                  {data?.subtitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QNAAccordian;
