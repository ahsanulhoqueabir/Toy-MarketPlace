import React, { useContext } from "react";
import Button from "./buttons/Button";
import LogInButton from "./buttons/LogInButton";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import LoadingPage from "../Pages/LoadingPage";
const NavBar = () => {
  const navigate = useNavigate();
  const { user, logout, loading } = useContext(authContext);
  if (loading) {
    // return <LoadingPage />;
    return <Link to="/loadingpage"></Link>;
  }
  const handleLogout = () => {
    logout()
      .then(toast("Successfully Logout"), navigate("/"))
      .catch((err) => toast.error(err));
  };
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
                to="blogs"
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
              to="blogs"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <LogInButton onClick={handleLogout}>Log Out</LogInButton>
        ) : (
          <Link to="/login">
            <LogInButton>Log In</LogInButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
