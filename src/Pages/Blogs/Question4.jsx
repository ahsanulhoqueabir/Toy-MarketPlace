import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaClone } from "react-icons/fa6";
const Question4 = () => {
  return (
    <div className="text-lg py-10">
      <h2 className="lg:text-4xl font-semibold">
        {" "}
        <FaRegCircleQuestion className="inline-block mr-2 text-green-500"></FaRegCircleQuestion>
        Compare SQL and NoSQL databases?
      </h2>
      <div className="mt-5">
        <FaClone className="inline-block mr-2 text-green-500 text-3xl"></FaClone>
        <h2 className="text-xl font-semibold mb-4">
          MongoDB's Aggregate Framework
        </h2>
        <ol className="list-decimal pl-6">
          <li className="mb-4">
            <strong>Pipeline:</strong> The aggregate framework uses a pipeline
            model where documents pass through a series of stages. Each stage
            performs a specific operation on the input documents and passes the
            result to the next stage.
          </li>
          <li className="mb-4">
            <strong>Stages:</strong> Various stages are available in the
            aggregation pipeline, such as:
            <ul className="list-disc pl-6">
              <li>
                $match: Filters the documents based on specified criteria.
              </li>
              <li>
                $group: Groups documents together based on a specified key and
                performs aggregation operations within each group.
              </li>
              <li>
                $project: Reshapes documents, including selecting, renaming, or
                adding fields.
              </li>
              <li>$sort: Sorts the documents based on specified fields.</li>
              <li>
                $limit: Limits the number of documents passed to the next stage.
              </li>
              <li>
                $lookup: Performs a left outer join to retrieve documents from
                another collection.
              </li>
              <li>
                $unwind: Deconstructs an array field into separate documents,
                one for each element of the array.
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Execution:</strong> The aggregation pipeline is executed on
            the MongoDB server, which means that the processing is done closer
            to the data, resulting in improved performance.
          </li>
          <li className="mb-4">
            <strong>Optimization:</strong> MongoDB's aggregation framework is
            highly optimized, utilizing indexes and other performance-enhancing
            techniques to efficiently process large volumes of data.
          </li>
          <li className="mb-4">
            <strong>Result:</strong> After all stages have been executed, the
            final result is returned, typically as a cursor or an array of
            documents, depending on how the aggregation pipeline is executed.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Question4;
