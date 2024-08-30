import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cartSlice";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

const CartModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg p-6 w-1/3">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <AiOutlineClose size={16} />
        </button>

        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col w-full">
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
                      <p>
                        ${item.totalPrice.toFixed(2)} (x{item.quantity})
                      </p>
                      <div className="flex items-center">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="w-7 h-7 text-gray-600  rounded-full hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="w-7 h-7 text-gray-600  rounded-full hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-xl font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </p>
            </div>

            <div className="flex justify mt-6">
              <button className="btn bg-black w-full">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
