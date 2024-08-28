import { selectColors } from "../utils/selectedColor";
import { useState } from "react";

const productCard = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleColorSelect = (colors) => {
    setSelectedColor(colors);
  };
  return (
    <div className="flex flex-col mx-2">
      <div className="w-[372px] h-[472px] bg-white rounded-xl shadow-lg ">
        <img src="" alt="product" className="w-full" />
      </div>
      <div className="flex items-center space-x-2 mt-2">
        {selectColors
          .slice(0, showAll ? selectColors.length : 6)
          .map((colors, index) => (
            <div
              key={index}
              className={`w-7 h-7 rounded-full cursor-pointer border-2 ${
                selectedColor === colors ? "border-gray-900" : "border-gray-300"
              }`}
              style={{ backgroundColor: colors }}
              onClick={() => handleColorSelect(colors)}
            ></div>
          ))}
        {!showAll && selectColors.length > 6 && (
          <button
            onClick={() => setShowAll(true)}
            className="text-gray-500 text-lg font-semibold"
          >
            +{selectColors.length - 6}
          </button>
        )}
      </div>
      <h1 className="text-xl  mt-2">Essential Popover Hoodie</h1>
      <p>$80</p>
    </div>
  );
};

export default productCard;
