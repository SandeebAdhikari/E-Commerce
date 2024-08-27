import { useState } from "react";
import Jeans from "../bottom/jeans";
import Pants from "../bottom/pants";
import Shorts from "../bottom/shorts";
import SweatPants from "../bottom/sweatPants";
import Active from "../bottom/active";

import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

const Filter = () => {
  const [isOpenApparel, setIsOpen] = useState(false);
  const [isOpenBottom, setIsOpenApparel] = useState(false);
  const [isOpenNewArrival, setIsOpenNewArrivals] = useState(false);

  const toggleApparelMenu = () => {
    setIsOpen(!isOpenApparel);
  };

  const toggleBottomMenu = () => {
    setIsOpenApparel(!isOpenBottom);
  };

  const toggleNewArrivalMenu = () => {
    setIsOpenNewArrivals(!isOpenNewArrival);
  };

  return (
    <div className="w-72 min-h-screen">
      <div className="flex items-center justify-between h-12">
        <h1 className="text-xl">FILTER</h1>
        <h1 className="text-xl">RESET</h1>
      </div>
      <hr />
      <div>
        <div
          onClick={toggleApparelMenu}
          className="flex justify-between items-center cursor-pointer"
        >
          <span className="text-2xl font-bold">Apparels</span>
          <span>{isOpenApparel ? <FaChevronDown /> : <FaChevronUp />}</span>
        </div>
        {isOpenApparel && (
          <div>
            <div
              onClick={toggleNewArrivalMenu}
              className="flex gap-2 items-center cursor-pointer mt-2"
            >
              <span>
                {isOpenNewArrival ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <span className="font-semibold">New Arrivals</span>
            </div>
            {isOpenNewArrival && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <a href="#">Tops</a>
                </li>
                <li>
                  <a href="#">Bottoms</a>
                </li>
                <li>
                  <a href="#">Coats & Jackets</a>
                </li>
                <li>
                  <a href="#">Active</a>
                </li>
                <li>
                  <a href="#">Accessories & Sleep</a>
                </li>
              </ul>
            )}

            <div
              onClick={toggleBottomMenu}
              className="flex gap-2 items-center cursor-pointer mt-2"
            >
              <span>
                {isOpenBottom ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <span className="font-semibold">Bottoms</span>
            </div>
            {isOpenBottom && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <Jeans />
                </li>
                <li>
                  <a href="#">
                    <Pants />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <SweatPants />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Shorts />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Active />
                  </a>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
