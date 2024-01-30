import React, { useContext, useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";
import { authContext } from "../AuthProvider/AuthProvider";
import EachToyRow from "../Components/EachToyRow";

const MyToys = () => {
  const { user } = useContext(authContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/UsersToysData?Contact=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  console.log(myToys);
  return (
    <div>
      <PageHeader>My Toys</PageHeader>
      <div className="py-10">
        {myToys.map((toy, idx) => (
          <EachToyRow key={idx} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default MyToys;
