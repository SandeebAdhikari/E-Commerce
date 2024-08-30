import Categories from "../categories";
import { useState } from "react";

const Filter = ({ onCategorySelect }) => {
  const [isToggleSwitch, setIsToggleSwitch] = useState(true);

  const toggleFilterVisibility = () => {
    setIsToggleSwitch(!isToggleSwitch);
  };

  return (
    <div className="w-52 min-h-screen">
      <div className="h-24 flex items-center justify-between p-2">
        <span className="mr-3 text-gray-600 font-semibold">Shop My Store</span>
        <div
          className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
            isToggleSwitch ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={toggleFilterVisibility}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
              isToggleSwitch ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>
      <hr />
      <div>
        <Categories onCategorySelect={onCategorySelect} />
      </div>
    </div>
  );
};

export default Filter;
