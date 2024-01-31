import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import AdminPanel from "../Pages/AdminPanel";
import LogIn from "../Pages/LogIn";
import SignUP from "../Pages/SignUP";
import AllToys from "../Pages/AllToys";
import ToyDetails from "../Pages/ToyDetails";
import LoadingPage from "../Pages/LoadingPage";
import AddToy from "../Pages/AddToy";
import MyToys from "../Pages/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdatePage from "../Pages/UpdatePage";
import Blogs from "../Pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "alltoys",
        element: <AllToys />,
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "addtoy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: <UpdatePage />,
        loader: ({ params }) =>
          fetch(`https://toy-market-server-omega.vercel.app/CertainToyData/${params.id}`),
      },
      {
        path: "blog",
        element: <h1>Blog</h1>,
      },
      {
        path: "toyDeatils/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => params.id,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "loadingpage",
    element: <LoadingPage />,
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
