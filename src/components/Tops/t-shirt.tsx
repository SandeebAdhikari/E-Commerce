import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const TShirt = () => {
  const [isOpenTShirt, setIsOpenTShirt] = useState(false);

  const toggleTShirtMenu = () => {
    setIsOpenTShirt(!isOpenTShirt);
  };
  return (
    <div>
      <div
        onClick={toggleTShirtMenu}
        className="flex justify-between gap-2 items-center cursor-pointer mt-2"
      >
        <span className="font-semibold">TShirt</span>
        <span>{isOpenTShirt ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      {isOpenTShirt && (
        <ul className="ml-8 mt-2 space-y-2">
          <li>
            <a href="#">ViewAll</a>
          </li>
          <li>
            <a href="#">Crew T-Shirts</a>
          </li>
          <li>
            <a href="#">Henley T-Shirts</a>
          </li>
          <li>
            <a href="#">V-Neck T-Shirts</a>
          </li>
          <li>
            <a href="#">MultiPacks</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TShirt;
