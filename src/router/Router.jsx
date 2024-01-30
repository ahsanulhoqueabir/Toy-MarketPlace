import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AdminPanel from "../Pages/AdminPanel";
import LogIn from "../Pages/LogIn";
import SignUP from "../Pages/SignUP";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "alltoys",
        element: <h1>All Toys</h1>,
      },
      {
        path: "mytoys",
        element: <h1>My Toys</h1>,
      },
      {
        path: "addtoy",
        element: <h1>Add Toys</h1>,
      },
      {
        path: "blog",
        element: <h1>Blog</h1>,
      },
    ],
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "signup",
    element: <SignUP />,
  },
  {
    path: "AdminPanel",
    element: <AdminPanel />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
