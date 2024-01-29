import { Outlet } from "react-router-dom";
import Button from "./Components/Button";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
