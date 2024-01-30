import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import LoadingPage from "../Pages/LoadingPage";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return <LoadingPage />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
