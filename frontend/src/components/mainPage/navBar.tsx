import { MdFavoriteBorder } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import CartModal from "../cartModal";
import WishlistModal from "../wishListModal"; // Import your WishlistModal
import { useState, useEffect } from "react";
import Logo from "/images/sa-favicon-black.svg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.firstName) {
      setFirstName(user.firstName);
    }
    if (user && user.lastName) {
      setLastName(user.lastName);
    }
  }, []);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleWishlistClick = () => {
    setIsWishlistOpen(true);
  };

  const handleCloseWishlist = () => {
    setIsWishlistOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-24 shadow-lg shadow-slate-400 rounded-xl">
      <div className="flex items-center">
        <img src={Logo} className="text-xl w-32" />
        <ul className="menu menu-horizontal px-1 gap-5 ml-16">
          <li>
            <details>
              <summary>SHOP</summary>
              <ul className="rounded-t-none p-2 bg-slate-200">
                <li>
                  <a>Men's</a>
                </li>
                <li>
                  <a>Women's</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>FABRIC</summary>
              <ul className="rounded-t-none p-2 bg-slate-200">
                <li>
                  <a>Men's</a>
                </li>
                <li>
                  <a>Women's</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>JOURNAL</summary>
              <ul className="rounded-t-none p-2 bg-slate-200">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>ABOUT</summary>
              <ul className="rounded-t-none p-2 bg-slate-200">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5 ml-64">
        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-200 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
          <h1 className="text-xl">
            {firstName.toUpperCase()} {lastName.toUpperCase()}
          </h1>
        </div>

        <button className="btn btn-ghost btn-circle">
          <CiSearch size={40} />
        </button>

        <button
          className="btn btn-ghost btn-circle"
          onClick={handleWishlistClick}
        >
          <div className="indicator">
            <MdFavoriteBorder size={40} />
            <span className="badge badge-sm indicator-item">
              {wishlistItems.length}
            </span>
          </div>
        </button>

        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <div className="indicator ">
              <LiaShoppingBagSolid size={40} />
              <span className="badge badge-sm indicator-item">
                {totalQuantity}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body bg-slate-200 rounded-b-lg">
              <span className="text-lg font-bold">{totalQuantity} Items</span>
              <span className="text-black">
                Subtotal: ${totalPrice.toFixed(2)}
              </span>
              <div className="bg-black text-white p-2 rounded-xl hover:rounded-2xl">
                <button className=" btn-block" onClick={handleCartClick}>
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
        <WishlistModal isOpen={isWishlistOpen} onClose={handleCloseWishlist} />
      </div>
    </div>
  );
};

export default NavBar;
