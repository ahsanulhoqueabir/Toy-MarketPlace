import React from "react";
import { useState } from "react";

const accordionData = [
  {
    title:
      "What are the types of Products available in the Toys & Games category?",
    subtitle:
      " Now you can find here only scientific category includes subcategory of Astronomy,chemsitry and Magnetics",
  },
  {
    title: "What all products I can purchase in the Toys & Games category?",
    subtitle: "You can purchase only scientific toys and games",
  },
  {
    title: "Why choose AtomAlly?",
    subtitle:
      "AtomAlly is a platform that provides a wide range of scientific toys and games. It is a one-stop destination for all your scientific toys and games needs. You can find a variety of scientific toys and games from different brands and sellers. You can choose from a wide range of products and get the best deals. AtomAlly offers a convenient and hassle-free shopping experience. You can shop for scientific toys and games from the comfort of your home. You can also avail of fast delivery and easy returns. AtomAlly offers secure payment options and easy order tracking. You can also enjoy exciting discounts and offers on your purchase.",
  },
  {
    title: "Do you Offer Free Shipping?",
    subtitle: "Yes, we offer free shipping on all orders above $100",
  },
  {
    title: " How long would it take for me to received my Order?",
    subtitle:
      "We offer express shipment on all orders. Once you place an order with us, we ship it within 3-10 working days and receipt of payment is also provided to you.",
  },
  {
    title: "What is the return policy?",
    subtitle: "You can return the product within 30 days of purchase",
  },
];
const QNAAccordian = () => {
  const [isActive, setIsActive] = useState(0);
  const handleToggle = (idx) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div className="pt-10 mt-10 bg-teal-100">
      <h2 className="text-3xl text-center font-bold py-10">QnA Section</h2>
      <div className="space-y-4 p-2 md:p-6">
        {accordionData?.map((data, idx) => (
          <div
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            key={idx}
          >
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
