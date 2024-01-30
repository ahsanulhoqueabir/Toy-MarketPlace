import React, { useContext, useState } from "react";
import PageHeader from "../Components/PageHeader";
import { authContext } from "../AuthProvider/AuthProvider";
import EachToyRow from "../Components/EachToyRow";

const AllToys = () => {
  const [Toys, setToys] = useState([]);
  const { allToys } = useContext(authContext);
  return (
    <div>
      <PageHeader>All Toys</PageHeader>
      <div className="py-10 divide-y-2">
        {allToys.map((toy, idx) => (
          <EachToyRow key={idx} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
