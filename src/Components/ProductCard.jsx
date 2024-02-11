import React, { useContext } from "react";
import CartButton from "./buttons/CartButton";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ProductCard = ({ data, category }) => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const handleRedirect = () => {
    if (user) {
      return `/toyDeatils/${data._id}`;
    } else {
      Swal.fire({
        title: "Want to LogIn?",
        text: "Without login you can't see the details of the product",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        } else {
          navigate("/");
        }
      });
    }
  };
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="rounded-lg border-2  border-teal-200 bg-blue-100 shadow-sm w-full max-w-md mx-auto"
    >
      {/* Product Title */}
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold ">{data.ToyName}</h3>
      </div>
      {/* Category and price */}
      <div className="px-6 py-4 flex flex-col gap-4">
        <div className="">
          <img
            className="rounded-lg h-[350px]  bg-gray-600 object-cover w-full "
            src={data.ToyImage}
          />
        </div>
        <div className="flex justify-between items-end">
          <h2 className="text-2xl flex items-center gap-1 font-medium text-center">
            <span className="">
              <FaBangladeshiTakaSign className="text-xl" />
            </span>
            {data.ToyPrice}
          </h2>
          <p className="text-sm rounded-lg text-center p-2 bg-gray-700 text-white">
            Category: {category}
          </p>
        </div>
        <div>
          <p>Rating: {data.ToyRating}</p>
        </div>
      </div>
      <div className="flex items-center p-6">
        {/* <Link to={`${user ? `/toyDeatils/${data._id}` : "/login"}`}> */}
        <CartButton onClick={handleRedirect} className="w-full">
          View Details
        </CartButton>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ProductCard;
