import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../api/productApi";
import StarRating from "../components/starRating";
import { MdFavoriteBorder } from "react-icons/md";
import NavBar from "../components/mainPage/navBar";
import { TbTruckReturn } from "react-icons/tb";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cartSlice";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductsQuery();
  const [showAllColors, setShowAllColors] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);
  const [isShowSalesDate, setIsShowSalesDate] = useState(false);
  const [isShowDelivery, setIsShowDelivery] = useState(false);
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data?.payload?.products?.find((item) => item.webID === id);

  if (!product) {
    return <p>Product details are not available.</p>;
  }

  const displayedColors = showAllColors
    ? product.swatchImages
    : product.swatchImages?.slice(0, 6);

  const toggleDescription = () => {
    setIsShowDescription(!isShowDescription);
  };
  const toggleSalesDate = () => {
    setIsShowSalesDate(!isShowSalesDate);
  };

  const toggleDelivery = () => {
    setIsShowDelivery(!isShowDelivery);
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: product.webID,
        title: product.productTitle,
        price:
          product.prices?.[0]?.salePrice?.minPrice ||
          product.prices?.[0]?.regularPrice?.minPrice ||
          0,
        image: product.image?.url,
      })
    );
  };

  return (
    <div className="mx-[250px] min-h-screen py-8">
      <NavBar />
      <div className="flex flex-col lg:flex-row mt-12 gap-8">
        <div className="relative w-472 h-[600px] bg-white rounded-xl shadow-lg shadow-slate-400 mb-4">
          <img
            src={product.image?.url || "/default-image.png"}
            alt={product.productTitle || "Product Image"}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">
            {product.productTitle || "Product Title"}
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            $
            {product.prices?.[0]?.salePrice?.minPrice ||
              product.prices?.[0]?.regularPrice?.minPrice ||
              "Price not available"}
            {product.prices?.[0]?.salePrice?.minPrice && (
              <span className="text-red-600 ml-2">(On Sale)</span>
            )}
          </p>

          <StarRating
            rating={product.rating?.avgRating || 0} // Average rating out of 5
            reviewCount={product.rating?.count || 0} // Number of reviews
          />

          <div className="mb-4 mt-4 w-full">
            <h3 className="text-xl font-semibold mb-2">Available Colors:</h3>
            <div className="flex gap-4 flex-wrap">
              {displayedColors?.length > 0 ? (
                displayedColors.map((swatch, index) => (
                  <div key={index} className="flex items-center">
                    <img
                      src={swatch.URL}
                      alt={swatch.color}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span>{swatch.color}</span>
                  </div>
                ))
              ) : (
                <p>No colors available.</p>
              )}
            </div>

            {product.swatchImages?.length > 6 && !showAllColors && (
              <button
                onClick={() => setShowAllColors(true)}
                className="text-blue-500 text-sm mt-2"
              >
                +{product.swatchImages.length - 6} more colors
              </button>
            )}
          </div>

          <div className="flex gap-4">
            <button
              className="bg-black text-white rounded-md hover:rounded-xl w-11/12"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-md hover:rounded-xl hover:bg-gray-300 h-12">
              <MdFavoriteBorder size={24} />
            </button>
          </div>
          <div className="flex justify-between mt-12 items-center">
            <p>Free delivery & 100 day free returns</p>
            <TbTruckReturn size={40} />
          </div>
          <hr />
          <div className="flex gap-8 w-full">
            <div className="mt-8 w-full">
              <div onClick={toggleDescription} className="flex justify-between">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <span>
                  {isShowDescription ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </div>
              {isShowDescription && (
                <p className="text-lg text-gray-600 mb-6">
                  {product.description || "No description available."}
                </p>
              )}

              <hr />

              {product.prices?.[0]?.salePrice && (
                <div className="mt-4 mb-4">
                  <div
                    onClick={toggleSalesDate}
                    className="flex justify-between"
                  >
                    <h3 className="text-2xl font-semibold mb-4">Sales</h3>
                    <span>
                      {isShowSalesDate ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </span>
                  </div>
                  {isShowSalesDate && (
                    <div className="flex flex-col">
                      <p>
                        Sale Starts:
                        {product.prices?.[0]?.displayBegDateTime || "N/A"}
                      </p>
                      <p>
                        Sale Ends:
                        {product.prices?.[0]?.displayEndDateTime || "N/A"}
                      </p>
                    </div>
                  )}
                </div>
              )}
              <hr />

              <div className="mt-4 mb-4">
                <div onClick={toggleDelivery} className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-4">Delivery</h3>
                  <span>
                    {isShowDelivery ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </div>
                {isShowDelivery && (
                  <div>
                    <p>
                      Available for Shipping:{" "}
                      {product.isAvailableforShip ? "Yes" : "No" || ""}
                    </p>
                    <p>
                      Available for Pickup:{" "}
                      {product.isAvailableforPickUp ? "Yes" : "No" || ""}
                    </p>
                  </div>
                )}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
