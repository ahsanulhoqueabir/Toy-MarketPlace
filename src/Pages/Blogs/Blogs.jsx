import React from "react";
import PageHeader from "../../Components/PageHeader";
import Question1 from "./Question1";
import { Title } from "../../utilities/Title";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";

const Blogs = () => {
  Title("Blogs");
  return (
    <div>
      <PageHeader>Blogs</PageHeader>
      <section className="py-5 space-y-6 divide-y-2 divide-gray-300">
        <Question1 />
        <Question2 />
        <Question3 />
        <Question4 />
      </section>
    </div>
  );
};

export default Blogs;
