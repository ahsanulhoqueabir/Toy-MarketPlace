import React, { useEffect, useState } from "react";
import SectionHeadline from "../../Components/SectionHeadline";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "../../Components/ProductCard";
const ShopByCategory = () => {
  const [loading, setLoading] = useState(false);
  const [currTab, setcurrTab] = useState([]);
  const [category, setCategory] = useState("Astronomy");
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://toy-market-server-orcin.vercel.app/getDataByCategory?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setcurrTab(data);
        setLoading(false);
      });
  }, [category]);
  const handleClick = (e) => {
    setLoading(true);
    const data = e.target.innerHTML;
    setCategory(data);
    fetch(
      `https://toy-market-server-orcin.vercel.app/getDataByCategory?category=${data}`
    )
      .then((res) => res.json())
      .then((data) => {
        setcurrTab(data);
        setLoading(false);
      });
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

        {loading ? (
          <div className="flex justify-center py-16">
            <span className="loading loading-bars text-blue-600 loading-lg"></span>
          </div>
        ) : (
          <>
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
          </>
        )}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
