import { Outlet } from "react-router-dom";
import Button from "./Components/buttons/Button";
import NavBar from "./Components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const App = () => {
  return (
    <div className="">
      <NavBar />
      <div className="min-h-screen px-3 lg:px-16">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
