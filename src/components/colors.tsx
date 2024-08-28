import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { colors } from "./utils/colors";

const Colors = () => {
  const [isOpenColor, setIsOpenColor] = useState(false);

  const toggleColorMenu = () => {
    setIsOpenColor(!isOpenColor);
  };
  return (
    <div>
      <div
        onClick={toggleColorMenu}
        className="flex justify-between items-center mt-8"
      >
        <span className="text-xl font-semibold">Color</span>
        <span>{isOpenColor ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {isOpenColor && (
        <ul>
          {colors.map((color, index) => (
            <li key={index} className="flex gap-4">
              <input type="checkbox" />
              <label>{color}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Colors;
