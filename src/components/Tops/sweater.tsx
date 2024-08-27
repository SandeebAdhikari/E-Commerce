import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const Sweater = () => {
  const [isOpenSweater, setIsOpenSweater] = useState(false);

  const toggleSweaterMenu = () => {
    setIsOpenSweater(!isOpenSweater);
  };
  return (
    <div>
      <div
        onClick={toggleSweaterMenu}
        className="flex justify-between gap-2 items-center cursor-pointer mt-2"
      >
        <span className="font-semibold">Sweater</span>
        <span>{isOpenSweater ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      {isOpenSweater && (
        <ul className="ml-8 mt-2 space-y-2">
          <li>
            <a href="#">ViewAll</a>
          </li>
          <li>
            <a href="#">Sweater Polos</a>
          </li>
          <li>
            <a href="#">Crew Sweater</a>
          </li>
          <li>
            <a href="#">Cardigan Sweater</a>
          </li>
          <li>
            <a href="#">Sweater Tee & Tanks</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sweater;
