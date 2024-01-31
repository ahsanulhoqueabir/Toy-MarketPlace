import React from "react";
import PageHeader from "../../Components/PageHeader";
import Question1 from "./Question1";

const Blogs = () => {
  return (
    <div>
      <PageHeader />
      <section className="py-5">
        <Question1 />
      </section>
    </div>
  );
};

export default Blogs;
