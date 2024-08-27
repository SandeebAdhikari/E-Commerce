import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const Active = () => {
  const [isOpenActive, setIsOpenActive] = useState(false);

  const toggleJeansMenu = () => {
    setIsOpenActive(!isOpenActive);
  };
  return (
    <div>
      <div
        onClick={toggleJeansMenu}
        className="flex justify-between gap-2 items-center cursor-pointer mt-2"
      >
        <span className="font-semibold">Active</span>
        <span>{isOpenActive ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      {isOpenActive && (
        <ul className="ml-8 mt-2 space-y-2">
          <li>
            <a href="#">ViewAll</a>
          </li>
          <li>
            <a href="#">Athletic Fit Jeans</a>
          </li>
          <li>
            <a href="#">Classic Fit Jeans</a>
          </li>
          <li>
            <a href="#">Ultra Baggy Jeans</a>
          </li>
          <li>
            <a href="#">Baggy Jeans</a>
          </li>
          <li>
            <a href="#">Loose Jeans</a>
          </li>
          <li>
            <a href="#">90's Straight Jeans</a>
          </li>
          <li>
            <a href="#">Slim Jeans</a>
          </li>
          <li>
            <a href="#">Skinny Jeans</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Active;
