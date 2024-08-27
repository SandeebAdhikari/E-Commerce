import { useState } from "react";
import DetailPage from "./DetailPage";
import ProductCard from "../components/mainPage/productCard";
import NavBar from "../components/mainPage/navBar";
import Filter from "../components/mainPage/filter";

const MainPage = () => {
  const [showDetailPage, setShowDetailPage] = useState(false);

  const handleClick = () => {
    setShowDetailPage(true);
  };

  return (
    <div className="mx-[250px]">
      <NavBar />
      <div className="flex items-center w-full h-32 ">
        <h1 className="text-2xl font-semibold ">Gender</h1>
      </div>
      <div className="flex gap-8">
        <Filter />
        <ProductCard />
      </div>
    </div>
  );
};

export default MainPage;
