import React, { useContext } from "react";
import Button from "./Button";
import LogInButton from "./LogInButton";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
const NavBar = () => {
  const { user } = useContext(authContext);
  return (
    <div className="navbar  lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="px-3  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                className={`bg-blue-100 px-5 rounded-lg font-semibold hover:bg-blue-200 ${({
                  isActive,
                }) => isActive && "bg-blue-300"}}`}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`bg-blue-100 px-5 rounded-lg font-semibold hover:bg-blue-200 ${({
                  isActive,
                }) => isActive && "bg-blue-300"}}`}
                to="alltoys"
              >
                All toys
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  className={`bg-blue-100 px-5 rounded-lg font-semibold hover:bg-blue-200 ${({
                    isActive,
                  }) => isActive && "bg-blue-300"}}`}
                  to="mytoys"
                >
                  My Toys
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  className={`bg-blue-100 px-5 rounded-lg font-semibold hover:bg-blue-200 ${({
                    isActive,
                  }) => isActive && "bg-blue-300"}}`}
                  to="addtoy"
                >
                  Add A Toy
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                className={`bg-blue-100 px-5 rounded-lg font-semibold hover:bg-blue-200 ${({
                  isActive,
                }) => isActive && "bg-blue-300"}}`}
                to="blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link>
          <Link to="/" className="flex items-center">
            <img
              className="h-8 w-8 lg:size-10 mr-2 rounded-full"
              src="https://i.ibb.co/85pYzLj/AtomAlly.png"
              alt="AtomAlly"
              border="0"
            />
            <span className=" font-mono text-xl font-bold tracking-wider 	">
              AtomAlly
            </span>
          </Link>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-4 menu-horizontal px-1">
          <li>
            <NavLink
              className={`bg-blue-100 px-5 rounded-lg font-semibold hover:bg-blue-200 ${({
                isActive,
              }) => isActive && "bg-blue-300"}}`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`bg-blue-100 px-5 rounded-lg font-semibold hover:bg-blue-200 ${({
                isActive,
              }) => isActive && "bg-blue-300"}}`}
              to="alltoys"
            >
              All toys
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                className={`bg-blue-100 px-5 rounded-lg font-semibold hover:bg-blue-200 ${({
                  isActive,
                }) => isActive && "bg-blue-300"}}`}
                to="mytoys"
              >
                My Toys
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                className={`bg-blue-100 px-5 rounded-lg font-semibold hover:bg-blue-200 ${({
                  isActive,
                }) => isActive && "bg-blue-300"}}`}
                to="addtoy"
              >
                Add A Toy
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              className={`bg-blue-100 px-5 rounded-lg font-semibold hover:bg-blue-200 ${({
                isActive,
              }) => isActive && "bg-blue-300"}}`}
              to="blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <LogInButton>Log Out</LogInButton>
        ) : (
          <LogInButton>Log In</LogInButton>
        )}
      </div>
    </div>
  );
};

export default NavBar;
