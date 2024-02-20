import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaClone } from "react-icons/fa6";

const Question2 = () => {
  return (
    <div className="text-lg py-10">
      <h2 className="lg:text-4xl font-semibold">
        {" "}
        <FaRegCircleQuestion className="inline-block mr-2 text-green-500"></FaRegCircleQuestion>
        Compare SQL and NoSQL databases?
      </h2>
      <div className="mt-5">
        <FaClone className="inline-block mr-2 text-green-500 text-3xl"></FaClone>
        <table className="table border-2 my-3">
          <tr>
            <th>Feature</th>
            <th>SQL Databases</th>
            <th>NoSQL Databases</th>
          </tr>
          <tr>
            <td>Data Structure</td>
            <td>Structured (Tables)</td>
            <td>Flexible (Key-Value, Document, Graph, Columnar)</td>
          </tr>
          <tr>
            <td>Schema</td>
            <td>Fixed Schema</td>
            <td>Dynamic Schema</td>
          </tr>
          <tr>
            <td>Query Language</td>
            <td>SQL</td>
            <td>Proprietary or Query APIs</td>
          </tr>
          <tr>
            <td>Scalability</td>
            <td>Vertical (Scaling up)</td>
            <td>Horizontal (Scaling out)</td>
          </tr>
          <tr>
            <td>Transactions</td>
            <td>ACID Compliance</td>
            <td>Eventual Consistency (Often relaxed)</td>
          </tr>
          <tr>
            <td>Relational Model</td>
            <td>Yes</td>
            <td>No (except for some)</td>
          </tr>
          <tr>
            <td>Examples</td>
            <td>MySQL, PostgreSQL, SQL Server</td>
            <td>MongoDB, Cassandra, Redis</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Question2;
