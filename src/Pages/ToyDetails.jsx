import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageHeader from "../Components/PageHeader";

const ToyDetails = () => {
  const [toy, setToy] = useState({});
  const id = useLoaderData();
  useEffect(() => {
    fetch(`https://toy-market-server-omega.vercel.app/CertainToyData/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data[0]));
  }, []);
  const {
    ToyName,
    SellerContact,
    SellerName,
    ToyCategory,
    ToyDesc,
    ToyImage,
    ToyPrice,
    ToyRating,
    ToyStock,
    _id,
  } = toy;
  return (
    <div>
      <PageHeader>
        Details About <span>{ToyName}</span>{" "}
      </PageHeader>
      <section className="py-16 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-full ">
            <img
              className="border  border-teal-300 shadow-xl shadow-blue-200 h-[240px] lg:h-[450px] object-cover"
              src={ToyImage}
              alt={ToyName}
            />
          </div>
          <div className="w-full lg:text-2xl">
            <h1>
              <span className="font-semibold">Name: </span> {ToyName}
            </h1>

            <p>
              <span className="font-semibold">Rating: </span>
              {ToyRating}
            </p>
            <p>
              <span className="font-semibold">Available: </span>
              {ToyStock}
            </p>
            <p>
              <span className="font-semibold">Price: </span>
              {ToyPrice}
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Description</h1>
          <p className="text-lg text-justify">{ToyDesc}</p>
        </div>
        <div className="border border-teal-200 p-2 w-fit">
          <h1 className="text-2xl font-semibold">Seller Info</h1>
          <p>
            <span className="font-semibold">Name: </span>
            {SellerName}
          </p>
          <p>
            <span className="font-semibold">Contact: </span>
            {SellerContact}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ToyDetails;
