import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const Jeans = () => {
  const [isOpenJeans, setIsOpenJeans] = useState(false);

  const toggleJeansMenu = () => {
    setIsOpenJeans(!isOpenJeans);
  };
  return (
    <div>
      <div
        onClick={toggleJeansMenu}
        className="flex justify-between gap-2 items-center cursor-pointer mt-2"
      >
        <span className="font-semibold">Jeans</span>
        <span>{isOpenJeans ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      {isOpenJeans && (
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

export default Jeans;
