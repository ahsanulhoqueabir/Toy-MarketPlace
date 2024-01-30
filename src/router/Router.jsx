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
        element: <MyToys />,
      },
      {
        path: "addtoy",
        element: <AddToy />,
      },
      {
        path: "blog",
        element: <h1>Blog</h1>,
      },
      {
        path: "toyDeatils/:id",
        element: <ToyDetails />,
        loader: ({ params }) => params.id,
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
