import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import SubmitButton from "../Components/buttons/SubmitButton";
import InputField from "../Components/InputField";
import PageHeader from "../Components/PageHeader";
import Lottie from "lottie-react";
import anim from "../assets/Loader2.json";
import { authContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const UpdatePage = () => {
  const { user, myToys, setMyToys } = useContext(authContext);
  const toy = useLoaderData();
  const navigate = useNavigate();
  const {
    ToyImage,
    ToyName,
    SellerName,
    ToyPrice,
    ToyRating,
    ToyStock,
    ToyDesc,
    _id,
    ToyCategory,
  } = toy[0];

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      ToyName: form.ToyName.value,
      ToyPrice: form.ToyPrice.value,
      ToyImage: form.ToyImage.value,
      ToyDesc: form.ToyDesc.value,
      ToyStock: form.ToyStock.value,
      ToyCategory: form.ToyCategory.value,
      ToyRating: form.ToyRating.value,
      SellerName: form.SellerName.value,
      SellerContact: user?.email,
    };
    fetch(`http://localhost:3000/UpdatesToyData/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((x) => {
        toast("Data Updated Successfully");
        const newToys = myToys.filter((toy) => toy._id !== _id);
        setMyToys([...newToys, data]);
        navigate("/mytoys");
      });
  };
  //   console.log(toy);

  return (
    <div>
      <PageHeader>Update a Toy</PageHeader>
      <section className="flex gap-5 py-10 items-center">
        <div className="w-[40%] hidden lg:block shadow-cyan-200 shadow-lg">
          <Lottie animationData={anim}></Lottie>
        </div>
        <div className="">
          <form
            onSubmit={handleUpdate}
            className="px-10 py-20 flex gap-5 flex-col lg:mx-auto min-w-96 w-fit "
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <InputField
                defaultValue={ToyName}
                required
                name="ToyName"
                type="text"
                placeholder="Toy Name"
              >
                Toy Name
              </InputField>
              <InputField
                defaultValue={ToyPrice}
                required
                name="ToyPrice"
                type="text"
                placeholder="Toy Price"
              >
                Toy Price
              </InputField>
              <InputField
                defaultValue={ToyImage}
                required
                name="ToyImage"
                type="text"
                placeholder="Toy Image"
              >
                Toy Image
              </InputField>
              <InputField
                defaultValue={ToyDesc}
                required
                name="ToyDesc"
                type="text"
                placeholder="Toy Description"
              >
                Toy Description
              </InputField>
              <InputField
                defaultValue={ToyStock}
                required
                name="ToyStock"
                type="text"
                placeholder="Toy Stock"
              >
                Toy Stock
              </InputField>
              <InputField
                defaultValue={ToyCategory}
                required
                name="ToyCategory"
                type="text"
                placeholder="Toy Category"
              >
                Toy Category
              </InputField>
              <InputField
                defaultValue={ToyRating}
                required
                name="ToyRating"
                type="text"
                placeholder="Toy Rating"
              >
                Toy Rating
              </InputField>
              <InputField
                defaultValue={SellerName}
                required
                name="SellerName"
                type="text"
                placeholder="Seller Name"
              >
                Seller Name
              </InputField>
            </div>

            <SubmitButton type="submit" className="w-full">
              Update
            </SubmitButton>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdatePage;
