import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const Shorts = () => {
  const [isOpenShorts, setIsOpenShorts] = useState(false);

  const toggleJeansMenu = () => {
    setIsOpenShorts(!isOpenShorts);
  };
  return (
    <div>
      <div
        onClick={toggleJeansMenu}
        className="flex gap-2 justify-between items-center cursor-pointer mt-2"
      >
        <span className="font-semibold">Shorts</span>
        <span>{isOpenShorts ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      {isOpenShorts && (
        <ul className="ml-8 mt-2 space-y-2">
          <li>
            <a href="#">ViewAll</a>
          </li>
          <li>
            <a href="#">Plainfront Shorts</a>
          </li>
          <li>
            <a href="#">Pull-On Shorts </a>
          </li>
          <li>
            <a href="#">Active Shorts</a>
          </li>
          <li>
            <a href="#">All Day Shorts</a>
          </li>
          <li>
            <a href="#">Mesh Shorts</a>
          </li>
          <li>
            <a href="#">Essential Shorts</a>
          </li>
          <li>
            <a href="#">Utility Shorts</a>
          </li>
          <li>
            <a href="#">Denim Shorts</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Shorts;
