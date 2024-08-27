import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const Shirts = () => {
  const [isOpenShirt, setIsOpenShirt] = useState(false);

  const toggleShirtMenu = () => {
    setIsOpenShirt(!isOpenShirt);
  };
  return (
    <div>
      <div
        onClick={toggleShirtMenu}
        className="flex justify-between gap-2 items-center cursor-pointer mt-2"
      >
        <span className="font-semibold">Shirts</span>
        <span>{isOpenShirt ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      {isOpenShirt && (
        <ul className="ml-8 mt-2 space-y-2">
          <li>
            <a href="#">ViewAll</a>
          </li>
          <li>
            <a href="#">Short-Sleeve Shirts</a>
          </li>
          <li>
            <a href="#">Long-Sleeve</a>
          </li>
          <li>
            <a href="#">Dress Shirts</a>
          </li>
          <li>
            <a href="#">Shirt Jackets</a>
          </li>
          <li>
            <a href="#">Sweater Polos</a>
          </li>
          <li>
            <a href="#">Flannel's Shirts</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Shirts;
