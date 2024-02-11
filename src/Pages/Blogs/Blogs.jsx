import React from "react";
import PageHeader from "../../Components/PageHeader";
import Question1 from "./Question1";
import { Title } from "../../utilities/Title";

const Blogs = () => {
  Title("Blogs");
  return (
    <div>
      <PageHeader>Blogs</PageHeader>
      <section className="py-5">
        <Question1 />
      </section>
    </div>
  );
};

export default Blogs;
