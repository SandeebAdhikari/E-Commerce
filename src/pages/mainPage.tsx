import React, { useState } from "react";
import DetailPage from "./DetailPage";

const MainPage = () => {
  const [showDetailPage, setShowDetailPage] = useState(false);

  const handleClick = () => {
    setShowDetailPage(true);
  };

  return (
    <div>
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
