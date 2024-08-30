import NavBar from "../components/mainPage/navBar";
import Filter from "../components/mainPage/filter";
import ProductsList from "../components/mainPage/productList";
import { useState } from "react";

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (seoURL) => {
    setSelectedCategory(seoURL);
  };

  return (
    <div className="mx-[250px]">
      <NavBar />
      <div className="flex items-center w-full h-32">
        <h1 className="text-2xl font-semibold">Gender</h1>
      </div>
      <div className="flex gap-8 ">
        <div className="sticky top-0 h-screen overflow-y-auto">
          <Filter onCategorySelect={handleCategorySelect} />
        </div>
        <div className="flex-1 overflow-y-auto h-screen">
          <ProductsList seoURL={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
