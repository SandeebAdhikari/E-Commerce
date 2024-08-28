import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { styles } from "./utils/style";

const Style = () => {
  const [isOpenStyle, setIsOpenStyle] = useState(false);

  const toggleStyleMenu = () => {
    setIsOpenStyle(!isOpenStyle);
  };
  return (
    <div className="mt-8">
      <div
        className="flex justify-between items-center"
        onClick={toggleStyleMenu}
      >
        <span className="text-xl font-semibold">Style</span>
        <span>{isOpenStyle ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {isOpenStyle && (
        <ul>
          {styles.map((style, index) => (
            <li key={index} className="flex gap-4">
              <input type="checkbox" />
              <label>{style}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Style;
