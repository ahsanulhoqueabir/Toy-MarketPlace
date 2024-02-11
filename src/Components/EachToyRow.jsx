import React, { useContext } from "react";
import Button from "./buttons/Button";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const EachToyRow = ({ toy }) => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const {
    ToyImage,
    ToyName,
    SellerName,
    ToyPrice,
    ToyRating,
    ToyStock,
    _id,
    ToyCategory,
  } = toy;

  const handleDetailsShow = (id) => {
    const link = `/toyDeatils/${id}`;
    user
      ? navigate(`/toyDeatils/${id}`)
      : navigate("/login", { state: { from: link } });
  };
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="py-5 items-center flex lg:w-2/3 mx-auto gap-3"
    >
      <img className="size-12 object-cover rounded" src={ToyImage} alt="" />
      <div className="flex flex-1 justify-between  gap-3  items-center">
        <div className=" w-full ">
          <h1 className="font-semibold">{ToyName}</h1>
          <p className="text-gray-500">{SellerName}</p>
        </div>
        <div className="w-full">
          <p>
            <span className="font-semibold">Available:</span> {ToyStock}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {ToyCategory}
          </p>
        </div>
        <div className="navbar-end">
          <p>
            <span className="font-semibold">Price:</span> {ToyPrice}
          </p>
          {/* <Link to={`${user ? "/toyDeatils/:id" : "/login"}`}> */}
          <Button
            onClick={() => handleDetailsShow(_id)}
            className="py-1 px-2 text-sm"
          >
            Details
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default EachToyRow;
