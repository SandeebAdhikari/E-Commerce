import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const SweatPants = () => {
  const [isOpenSweatPant, setIsOpenSweatPant] = useState(false);

  const toggleJeansMenu = () => {
    setIsOpenSweatPant(!isOpenSweatPant);
  };
  return (
    <div>
      <div
        onClick={toggleJeansMenu}
        className="flex gap-2 justify-between items-center cursor-pointer mt-2"
      >
        <span className="font-semibold">Sweatpants</span>
        <span>{isOpenSweatPant ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      {isOpenSweatPant && (
        <ul className="ml-8 mt-2 space-y-2">
          <li>
            <a href="#">ViewAll</a>
          </li>
          <li>
            <a href="#">Jogger Sweatpants</a>
          </li>
          <li>
            <a href="#">Classic Sweatpants</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SweatPants;
