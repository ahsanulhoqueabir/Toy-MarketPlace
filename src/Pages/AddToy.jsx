import React, { useContext } from "react";
import PageHeader from "../Components/PageHeader";
import Button from "../Components/buttons/Button";
import InputField from "../Components/InputField";
import anim from "../assets/Loader2.json";
import Lottie from "lottie-react";
import { authContext } from "../AuthProvider/AuthProvider";
import SubmitButton from "../Components/buttons/SubmitButton";
import Swal from "sweetalert2";
import { Title } from "../utilities/Title";
const AddToy = () => {
  Title("Add a Toy");
  const { user, allToys, setToys } = useContext(authContext);
  const handleSubmit = (e) => {
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
    Swal.fire({
      title: "Are you sure?",
      text: "You can update later also",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:3000/allToys", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        setToys([...allToys, data]);
        Swal.fire({
          title: "Added!",
          text: "Your Item has been added.",
          icon: "success",
        });
      }
    });

    form.reset();
  };
  return (
    <div>
      <PageHeader>Add a Toy</PageHeader>
      <section className="flex gap-5 py-10 items-center">
        <div className="w-[40%] hidden lg:block shadow-cyan-200 shadow-lg">
          <Lottie animationData={anim}></Lottie>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="px-10 py-20 flex gap-5 flex-col lg:mx-auto min-w-96 w-fit "
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <InputField
                required
                name="ToyName"
                type="text"
                placeholder="Toy Name"
              >
                Toy Name
              </InputField>
              <InputField
                required
                name="ToyPrice"
                type="text"
                placeholder="Toy Price"
              >
                Toy Price
              </InputField>
              <InputField
                required
                name="ToyImage"
                type="text"
                placeholder="Toy Image"
              >
                Toy Image
              </InputField>
              <InputField
                required
                name="ToyDesc"
                type="text"
                placeholder="Toy Description"
              >
                Toy Description
              </InputField>
              <InputField
                required
                name="ToyStock"
                type="text"
                placeholder="Toy Stock"
              >
                Toy Stock
              </InputField>
              <div className="space-y-1">
                <label>Toy Category</label>
                <select
                  className="w-full  px-4 py-[10px] rounded-md border border-indigo-300 focus:outline-none"
                  name="ToyCategory"
                >
                  <option value="Astronomy">Astronomy</option>
                  <option value="Magnet">Magnet</option>
                  <option value="Engineering">Engineering</option>
                </select>
              </div>
              <InputField
                required
                name="ToyRating"
                type="text"
                placeholder="Toy Rating"
              >
                Toy Rating
              </InputField>
              <InputField
                required
                name="SellerName"
                type="text"
                placeholder="Seller Name"
              >
                Seller Name
              </InputField>
              <InputField
                required
                name="SellerContact"
                type="email"
                disabled
                className="cursor-not-allowed"
                placeholder={user?.email}
              >
                Seller Contact
              </InputField>
            </div>

            <SubmitButton type="submit" className="w-full">
              Add a Toy
            </SubmitButton>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddToy;
