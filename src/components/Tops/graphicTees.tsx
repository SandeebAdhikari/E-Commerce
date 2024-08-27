import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const Jeans = () => {
  const [isOpenGTees, setIsOpenGTees] = useState(false);

  const toggleGTeesMenu = () => {
    setIsOpenGTees(!isOpenGTees);
  };
  return (
    <div>
      <div
        onClick={toggleGTeesMenu}
        className="flex justify-between gap-2 items-center cursor-pointer mt-2"
      >
        <span className="font-semibold">Graphic Tees</span>
        <span>{isOpenGTees ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>
      {isOpenGTees && (
        <ul className="ml-8 mt-2 space-y-2">
          <li>
            <a href="#">ViewAll</a>
          </li>
          <li>
            <a href="#">Sports Graphics</a>
          </li>
          <li>
            <a href="#">Car Graphics</a>
          </li>
          <li>
            <a href="#">Destination Graphics</a>
          </li>
          <li>
            <a href="#">Pop Culture Graphics</a>
          </li>
          <li>
            <a href="#">Beverage Graphics</a>
          </li>
          <li>
            <a href="#">A & F Logo Graphics</a>
          </li>
          <li>
            <a href="#">Slim Jeans</a>
          </li>
          <li>
            <a href="#">Skinny Jeans</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Jeans;
