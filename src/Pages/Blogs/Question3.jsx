import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaClone } from "react-icons/fa6";

const Question3 = () => {
  return (
    <div className="text-lg py-10">
      <h2 className="lg:text-4xl font-semibold">
        {" "}
        <FaRegCircleQuestion className="inline-block mr-2 text-green-500"></FaRegCircleQuestion>
        What is express js? What is Nest JS ?
      </h2>
      <div className="mt-5">
        <FaClone className="inline-block mr-2 text-green-500 text-3xl"></FaClone>
        <h1 className="text-3xl font-bold mb-8">Express.js vs NestJS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Express.js */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Express.js</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Minimal and flexible Node.js web application framework.
              </li>
              <li className="mb-2">
                Designed for building web applications and APIs.
              </li>
              <li className="mb-2">
                Provides routing, middleware, template engines, HTTP utility
                methods, and error handling.
              </li>
              <li className="mb-2">
                Allows developers to create powerful server-side applications
                using JavaScript.
              </li>
            </ul>
          </div>

          {/* NestJS */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">NestJS</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Progressive Node.js framework for building efficient, reliable,
                and scalable server-side applications.
              </li>
              <li className="mb-2">
                Built with TypeScript and inspired by Angular.
              </li>
              <li className="mb-2">
                Encourages modularity, dependency injection, and decorators.
              </li>
              <li className="mb-2">
                Offers features like middleware, guards, WebSockets, and
                microservices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question3;
