import React, { useContext, useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";
import { authContext } from "../AuthProvider/AuthProvider";
import EachToyRow from "../Components/EachToyRow";
import notfound from "../assets/notfound.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import ExploreButton from "../Components/buttons/ExploreButton";
const MyToys = () => {
  const { user } = useContext(authContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/UsersToysData?Contact=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  //   console.log(myToys);
  return (
    <div>
      <PageHeader>My Toys</PageHeader>
      <div className="py-10">
        {myToys.length > 0 ? (
          myToys.map((toy, idx) => <EachToyRow key={idx} toy={toy} />)
        ) : (
          <div>
            <h1 className="text-center text-2xl font-bold">
              You have not added any toys yet!
            </h1>

            <div className="w-[40%] mx-auto">
              <Lottie animationData={notfound}></Lottie>
            </div>
            <div className="flex justify-center mx-auto items-center py-5 gap-5">
              <h1>Want to add a Toy?</h1>{" "}
              <Link to="/addtoy">
                <ExploreButton>Add a new Toys</ExploreButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyToys;
