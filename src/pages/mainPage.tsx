import { useState } from "react";
import DetailPage from "./DetailPage";
import ProductCard from "../components/productCard";
import NavBar from "../components/navBar";

const MainPage = () => {
  const [showDetailPage, setShowDetailPage] = useState(false);

  const handleClick = () => {
    setShowDetailPage(true);
  };

  return (
    <div className="mx-[250px]">
      <NavBar />
      <ProductCard />
      {!showDetailPage ? (
        <button className="btn shadow-lg rounded-xl p-2" onClick={handleClick}>
          Open Detail Page
        </button>
      ) : (
        <DetailPage />
      )}
    </div>
  );
};

export default MainPage;
