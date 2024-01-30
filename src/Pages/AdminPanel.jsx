import React from "react";
import Button from "../Components/buttons/Button";

const AdminPanel = () => {
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
      SellerContact: form.SellerContact.value,
    };
    fetch("http://localhost:3000/allToys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
    window.location.reload();
  };
  return (
    <div>
      <h1>Admin Panel for Add toy into database</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="px-10 py-20 flex flex-col gap-3 lg:mx-auto min-w-96 w-fit"
        >
          <input
            className="h-8 pl-3"
            name="ToyName"
            type="text"
            placeholder="Toy Name"
          />
          <input
            className="h-8 pl-3"
            name="ToyPrice"
            type="text"
            placeholder="Toy Price"
          />
          <input
            className="h-8 pl-3"
            name="ToyImage"
            type="text"
            placeholder="Toy Image"
          />
          <input
            className="h-8 pl-3"
            name="ToyDesc"
            type="text"
            placeholder="Toy Description"
          />
          <input
            className="h-8 pl-3"
            name="ToyStock"
            type="text"
            placeholder="Toy Stock"
          />
          <input
            className="h-8 pl-3"
            name="ToyCategory"
            type="text"
            placeholder="Toy Category"
          />
          <input
            className="h-8 pl-3"
            name="ToyRating"
            type="text"
            placeholder="Toy Rating"
          />
          <input
            className="h-8 pl-3"
            name="SellerName"
            type="text"
            placeholder="Seller Name"
          />
          <input
            className="h-8 pl-3"
            name="SellerContact"
            type="text"
            placeholder="Seller Contact"
          />

          <Button type="submit">Add a toy</Button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
