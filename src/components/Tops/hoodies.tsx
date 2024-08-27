import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const Sweatshirt = () => {
  const [isOpenSweatshirt, setIsOpenSweatshirt] = useState(false);

  const toggleSweatshirtMenu = () => {
    setIsOpenSweatshirt(!isOpenSweatshirt);
  };
  return (
    <div>
      <div
        onClick={toggleSweatshirtMenu}
        className="flex justify-between gap-2 items-center cursor-pointer mt-2"
      >
        <span className="font-semibold">Hoodies & Sweatshirts</span>
        <span>{isOpenSweatshirt ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      {isOpenSweatshirt && (
        <ul className="ml-8 mt-2 space-y-2">
          <li>
            <a href="#">ViewAll</a>
          </li>
          <li>
            <a href="#">Zip-UP Hoodies</a>
          </li>
          <li>
            <a href="#">Pullover Huddies</a>
          </li>
          <li>
            <a href="#">Crew Neck Sweatshirts</a>
          </li>
          <li>
            <a href="#">Half-Zip Sweatshirt</a>
          </li>
          <li>
            <a href="#">Graphic Hoodies & Sweatshirt</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sweatshirt;
