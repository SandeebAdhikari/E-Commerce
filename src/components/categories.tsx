import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
const Categories = () => {
  const [isOpenCollection, setIsOpenCollection] = useState(false);

  const toggleCollectionMenu = () => {
    setIsOpenCollection(!isOpenCollection);
  };

  return (
    <div className="mt-12">
      <div
        onClick={toggleCollectionMenu}
        className="flex justify-between items-center"
      >
        <span className="text-xl font-semibold">Categories</span>
        <span>{isOpenCollection ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {isOpenCollection && (
        <ul>
          <li className="font-bold mt-4">Tops</li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Jeans</label>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Pants</label>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Sweatpants</label>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Shorts</label>
          </li>

          <li className="font-bold mt-4">Bottoms</li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Graphic Tees</label>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Tees & Tanks</label>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Polos</label>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Shirts</label>
          </li>

          <li className="font-bold mt-4">Others</li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Active Wears</label>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Jacket & Coats</label>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Accessories</label>
          </li>
          <li className="flex gap-4">
            <input type="checkbox" />
            <label>Fragrance</label>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Categories;
