import React from "react";

const FeaturesOfUs = () => {
  const data = [
    {
      id: 1,
      title: "We Accept Afterpay",
      description: "Buy now and pay later with Afterpay in 4 easy payments.",
      icon: "https://toysmarket.com.au/cdn/shop/files/Untitled-1.png?v=1699360520&width=170",
    },
    {
      id: 2,
      title: "Fast Shipping",
      description: "We ship all orders within 24 hours of purchase.",
      icon: "https://i.ibb.co/fMj8gdS/fast-delivery.png",
    },
    {
      id: 3,
      title: "Customer Support",
      description:
        "We are always here to help you with any questions or concerns.",
      icon: "https://toysmarket.com.au/cdn/shop/files/24-hours.png?v=1698748317&width=500",
    },
    {
      id: 4,
      title: "100% Satisfaction Guarantee",
      description:
        "We offer a 30-day money-back guarantee on all our products.",
      icon: "https://i.ibb.co/CvCXftV/customer-satisfaction.png",
    },
  ];
  return (
    <div>
      <hr className="border-black py-5" />
      <h2 className="text-3xl font-bold text-center">
        Why Choose Toys Market?
      </h2>
      <section className="pt-10 grid grid-cols-1 md:grid-cols-2  gap-10">
        {data.map((item, i) => {
          return (
            <div key={i} className="flex gap-3">
              <div>
                <img className="size-16" src={item.icon} alt={item.title} />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FeaturesOfUs;
