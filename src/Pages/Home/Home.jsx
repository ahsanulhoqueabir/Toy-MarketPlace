import { Banner } from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <div className="pb-[100px]">
      <Banner />
      <Gallery />
      <ShopByCategory />
    </div>
  );
};

export default Home;
