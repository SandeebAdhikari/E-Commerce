import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import TShirtImage from "/images/Tshirt.png";
import { selectColors } from "../utils/selectedColor";

const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showAll, setShowAll] = useState(false); // Control for showing all colors

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowAll(false); // Collapse back to initial state after selection
  };

  // Move the selected color to the front
  const sortedColors = selectedColor
    ? [
        selectedColor,
        ...selectColors.filter((color) => color !== selectedColor),
      ]
    : selectColors;

  // Determine how many colors to show based on showAll state
  const displayedColors = showAll ? sortedColors : sortedColors.slice(0, 6);

  return (
    <div className="flex flex-col w-[348px] mx-2">
      <div className="relative h-[600px] bg-white rounded-xl shadow-lg shadow-slate-400">
        <img
          src={TShirtImage}
          alt="product"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
          <MdFavoriteBorder className="text-black text-2xl" />
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-2 gap-x-2 gap-y-2">
        {displayedColors.map((color, index) => (
          <div
            key={index}
            className={`w-5 h-5 rounded-full cursor-pointer border-2 ${
              selectedColor === color
                ? "border-gray-900 scale-110"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          ></div>
        ))}
        {sortedColors.length > 6 && !showAll && (
          <button
            onClick={() => setShowAll(true)} // Expands to show all colors
            className="text-gray-500 text-lg font-semibold"
          >
            +{sortedColors.length - 6}
          </button>
        )}
      </div>
      <h1 className="text-xl mt-2">Essential Popover Hoodie</h1>
      <p>$80</p>
    </div>
  );
};

export default ProductCard;
