import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { sizes } from "./utils/size";
const Size = () => {
  const [isOpenSize, setIsOpenSize] = useState(false);
  const toggleSizeMenu = () => {
    setIsOpenSize(!isOpenSize);
  };
  return (
    <div className="mt-8">
      <div
        onClick={toggleSizeMenu}
        className="flex justify-between items-center"
      >
        <span className="text-xl font-semibold">Sizes</span>
        <span>{isOpenSize ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {isOpenSize && (
        <ul>
          {sizes.map((size, index) => (
            <li key={index} className="flex gap-4">
              <input type="checkbox" />
              <label>{size}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Size;
