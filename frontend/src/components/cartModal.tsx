import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../features/cartSlice"; // Add the action for removing items

const CartModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
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

            <div className="flex justify-end mt-6">
              <button onClick={onClose} className="btn mr-4">
                Close
              </button>
              <button className="btn btn-primary">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
