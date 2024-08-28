import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { materials } from "./utils/material";
const Materials = () => {
  const [isOpenMaterials, setIsOpenMaterials] = useState(false);
  const toggleMaterialsMenu = () => {
    setIsOpenMaterials(!isOpenMaterials);
  };
  return (
    <div className="mt-8">
      <div
        onClick={toggleMaterialsMenu}
        className="flex justify-between items-center"
      >
        <span className="text-xl font-semibold">Materials</span>
        <span>{isOpenMaterials ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {isOpenMaterials && (
        <ul>
          {materials.map((material, index) => (
            <li key={index} className="flex gap-4">
              <input type="checkbox" />
              <label>{material}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Materials;
