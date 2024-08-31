import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToWishlist } from "../../features/wishListSlice";

const ProductCard = ({ product }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productImages = Array.isArray(product.image)
    ? product.image
    : [product.image];

  const validSwatches = Array.isArray(product.swatchImages)
    ? product.swatchImages
    : [];

  const displayedSwatches = showAll ? validSwatches : validSwatches.slice(0, 6);

  const handleColorSelect = (index) => {
    if (index < productImages.length) {
      setSelectedColorIndex(index);
    }
    setShowAll(false);
  };

  const handleWishlistClick = () => {
    dispatch(
      addItemToWishlist({
        id: product.webID,
        title: product.productTitle,
        price:
          product.prices?.[0]?.regularPrice?.maxPrice ||
          product.prices?.[0]?.regularPrice?.minPrice ||
          0,
        image: productImages[selectedColorIndex]?.url || "",
      })
    );
  };

  const handleClick = () => {
    const url = `/product/${product.webID}`;
    console.log("Navigating to:", url);
    navigate(url);
  };

  return (
    <div className="flex flex-col w-[348px] mx-2">
      <div className="relative h-[400px] bg-white rounded-xl shadow-lg shadow-slate-400">
        <img
          src={productImages[selectedColorIndex].url}
          alt={product.productTitle}
          className="w-full h-full object-contain rounded-xl"
          onClick={handleClick}
        />
        <div className="absolute top-2 right-2">
          <button
            className="bg-white p-2 rounded-full hover:shadow-xl hover:shadow-slate-400"
            onClick={handleWishlistClick}
          >
            <MdFavoriteBorder className="text-black text-2xl" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-2 gap-x-2 gap-y-2">
        {displayedSwatches.map((swatch, index) => (
          <img
            key={index}
            src={swatch.URL}
            alt={swatch.color}
            className={`w-5 h-5 rounded-full cursor-pointer border-2 ${
              selectedColorIndex === index && index < productImages.length
                ? "border-gray-900 scale-110"
                : "border-gray-300"
            }`}
            onClick={() => handleColorSelect(index)}
          />
        ))}
        {validSwatches.length > 6 && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="text-gray-500 text-lg font-semibold"
          >
            +{validSwatches.length - 6}
          </button>
        )}
      </div>
      <h1 className="text-xl mt-2">{product.productTitle}</h1>
      <p>
        $
        {product.prices?.[0]?.regularPrice?.maxPrice ||
          product.prices?.[0]?.regularPrice?.minPrice ||
          "Price not available"}
      </p>
    </div>
  );
};

export default ProductCard;
