import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { lengths } from "./utils/length";

const Length = () => {
  const [isOpenLength, setIsOpenLength] = useState(false);

  const toggleLengthMenu = () => {
    setIsOpenLength(!isOpenLength);
  };
  return (
    <div className="mt-8">
      <div
        className="flex justify-between items-center"
        onClick={toggleLengthMenu}
      >
        <span className="text-xl font-semibold">Length</span>
        <span>{isOpenLength ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {isOpenLength && (
        <ul>
          {lengths.map((length, index) => (
            <li key={index} className="flex gap-4">
              <input type="checkbox" />
              <label>{length}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Length;
