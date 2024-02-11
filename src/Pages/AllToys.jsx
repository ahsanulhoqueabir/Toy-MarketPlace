import React, { useContext, useState } from "react";
import PageHeader from "../Components/PageHeader";
import { authContext } from "../AuthProvider/AuthProvider";
import EachToyRow from "../Components/EachToyRow";

const AllToys = () => {
  const { allToys } = useContext(authContext);
  const [Toys, setToys] = useState([...allToys]);
  // console.log(Toys);

  const searchData = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if (!searchValue) return setToys(allToys);
    else {
      const filteredData = Toys.filter((item) => {
        return item.ToyName.toLowerCase().includes(searchValue.toLowerCase());
      });

      setToys(filteredData);
    }
  };
  return (
    <div>
      <PageHeader>All Toys</PageHeader>
      <div className="py-10 flex justify-center items-center">
        <form onChange={searchData} className="flex  items-center">
          <input
            type="text"
            placeholder="Search By Toy Name"
            className="input input-bordered shadow-lg shadow-cyan-200 focus:outline-none input-normal w-full max-w-sm"
          />
          {/* <button
            onClick={searchData}
            className="py-2 px-5 rounded bg-cyan-200 hover:bg-teal-300 hover:delay-100 transition-all duration-200		"
            type="submit"
          >
            Search
          </button> */}
        </form>
      </div>
      <div className="py-10 divide-y-2">
        {Toys.map((toy, idx) => (
          <EachToyRow key={idx} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
