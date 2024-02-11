import React, { useContext, useState } from "react";
import PageHeader from "../Components/PageHeader";
import { authContext } from "../AuthProvider/AuthProvider";
import EachToyRow from "../Components/EachToyRow";
import { Title } from "../utilities/Title";
import LoadingPage from "./LoadingPage";

const AllToys = () => {
  Title("All Toys");
  const { allToys } = useContext(authContext);
  const [Toys, setToys] = useState([...allToys]);
  // pagination logic goes here
  const [currentPage, setCurrentPage] = useState(1);
  const [toysPerPage, setToysPerPage] = useState(20);
  const indexOfLastToy = currentPage * toysPerPage;
  const indexOfFirstToy = indexOfLastToy - toysPerPage;
  const pageCount = Math.ceil(allToys.length / toysPerPage);
  const currentToys = allToys.slice(indexOfFirstToy, indexOfLastToy);
  const numbers = [...Array(pageCount + 1).keys()].slice(1);
  console.log(currentToys);
  // console.log(Toys);

  const searchData = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if (!searchValue) return setToys(allToys);
    else {
      const filteredData = [...allToys].filter((item) => {
        return item.ToyName.toLowerCase().includes(searchValue.toLowerCase());
      });

      setToys(filteredData);
    }
  };

  // pagination function are here
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < pageCount) setCurrentPage(currentPage + 1);
  };
  const paginate = (number) => {
    setCurrentPage(number);
  };

  if (currentToys.length === 0) {
    return <LoadingPage></LoadingPage>;
  }

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
        {currentToys?.map((toy, idx) => (
          <EachToyRow key={idx} toy={toy} />
        ))}
      </div>
      <div className="join gap-1 flex justify-center">
        <button
          onClick={prevPage}
          className="join-item bg-blue-100 hover:bg-blue-200 btn"
        >
          «
        </button>
        {numbers.map((number) => (
          <button
            onClick={() => paginate(number)}
            key={number}
            className={`bg-blue-100 hover:bg-blue-200 join-item btn ${
              number === currentPage ? "active" : ""
            }`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={nextPage}
          className="bg-blue-100 hover:bg-blue-200 join-item btn"
        >
          »
        </button>
      </div>
    </div>
  );
};

export default AllToys;
