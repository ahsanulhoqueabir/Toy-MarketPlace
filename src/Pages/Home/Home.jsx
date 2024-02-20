import { Title } from "../../utilities/Title";
import { Banner } from "./Banner";
import FeaturesOfUs from "./FeaturesOfUs";
import Gallery from "./Gallery";
import QNAAccordian from "./QNAAccordian";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  Title("Home");
  return (
    <div className="pb-[100px]">
      <Banner />
      <Gallery />
      <ShopByCategory />
      <FeaturesOfUs />
      <QNAAccordian />
    </div>
  );
};

export default Home;
