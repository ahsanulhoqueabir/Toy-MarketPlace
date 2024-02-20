import React, { useContext } from "react";
import Button from "./buttons/Button";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const MyToyRow = ({ toy }) => {
  const { user, allToys, setToys, myToys, setMyToys } = useContext(authContext);

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
    user ? navigate(`/toyDeatils/${id}`) : navigate("/login");
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-market-server-orcin.vercel.app/AllToysData?id=${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            const newToys = myToys.filter((toy) => toy._id !== id);
            setMyToys(newToys);
            navigate("/mytoys");
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
    console.log(id);
  };
  return (
    <div className="py-5 items-center flex lg:w-2/3 mx-auto gap-3">
      <img className="size-20 object-cover rounded" src={ToyImage} alt="" />
      <div className="flex flex-1 justify-between  gap-3  items-center">
        <div className=" w-full ">
          <h1 className="font-semibold">{ToyName}</h1>
          <p>
            <span className="font-semibold">Available:</span> {ToyStock}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {ToyCategory}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {ToyPrice}
          </p>
        </div>

        <div className="navbar-end flex flex-col items-center gap-3">
          <Button
            onClick={() => handleDetailsShow(_id)}
            className="py-2 px-2 text-sm"
          >
            Details
          </Button>
          <button onClick={() => handleDelete(_id)}>
            <FaTrash className="text-2xl" />
          </button>
          <button onClick={() => handleUpdate(_id)}>
            <FaRegEdit className="text-2xl text-black " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyToyRow;
