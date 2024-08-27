import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const Pants = () => {
  const [isOpenPants, setIsOpenPants] = useState(false);

  const toggleJeansMenu = () => {
    setIsOpenPants(!isOpenPants);
  };
  return (
    <div>
      <div
        onClick={toggleJeansMenu}
        className="flex gap-2 justify-between items-center cursor-pointer mt-2"
      >
        <span className="font-semibold">Pants</span>
        <span>{isOpenPants ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      {isOpenPants && (
        <ul className="ml-8 mt-2 space-y-2">
          <li>
            <a href="#">ViewAll</a>
          </li>
          <li>
            <a href="#">Chinos</a>
          </li>
          <li>
            <a href="#">Trouser</a>
          </li>
          <li>
            <a href="#">Joggers</a>
          </li>
          <li>
            <a href="#">Utility & Workwear Pants</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Pants;
