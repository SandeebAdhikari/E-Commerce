import { useDispatch, useSelector } from "react-redux";
import { removeItemFromWishlist, moveToCart } from "../features/wishlistSlice";
import { addItemToCart } from "../features/cartSlice"; // Import action to add item to cart

const WishlistModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wishlist);

  if (!isOpen) return null;

  const handleMoveToCart = (item) => {
    dispatch(moveToCart(item.id));
    dispatch(addItemToCart(item)); // Add the item to the cart
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg p-6 w-1/3">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <span>X</span> {/* Close button */}
        </button>
        <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
        {items.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 mr-4 rounded"
                  />
                  <div>
                    <p>{item.title}</p>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="btn btn-primary mr-4"
                    onClick={() => handleMoveToCart(item)}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => dispatch(removeItemFromWishlist(item.id))}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WishlistModal;
