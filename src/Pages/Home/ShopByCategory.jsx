import React, { useEffect, useState } from "react";
import SectionHeadline from "../../Components/SectionHeadline";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CartButton from "../../Components/buttons/CartButton";
import ProductCard from "../../Components/ProductCard";
const ShopByCategory = () => {
  const [currTab, setcurrTab] = useState([]);
  const [category, setCategory] = useState("Astronomy");
  useEffect(() => {
    fetch(`http://localhost:3000/getDataByCategory?category=${category}`)
      .then((res) => res.json())
      .then((data) => setcurrTab(data));
  }, []);
  const handleClick = (e) => {
    const data = e.target.innerHTML;
    setCategory(data);
    fetch(`http://localhost:3000/getDataByCategory?category=${data}`)
      .then((res) => res.json())
      .then((data) => setcurrTab(data));
  };
  return (
    <div className="py-10">
      <SectionHeadline>Shop By Category</SectionHeadline>
      <Tabs>
        <TabList>
          <Tab onClick={handleClick}>Astronomy</Tab>
          <Tab onClick={handleClick}>Magnet</Tab>
          <Tab onClick={handleClick}>Engineering</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
            {currTab.map((product, ind) => (
              <ProductCard
                key={ind}
                data={product}
                category={category}
              ></ProductCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
            {currTab.map((product, ind) => (
              <ProductCard
                key={ind}
                data={product}
                category={category}
              ></ProductCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
            {currTab.map((product, ind) => (
              <ProductCard
                key={ind}
                data={product}
                category={category}
              ></ProductCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
