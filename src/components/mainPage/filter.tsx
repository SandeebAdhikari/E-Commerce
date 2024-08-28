import { useState } from "react";
import Jeans from "../bottom/jeans";
import Pants from "../bottom/pants";
import Shorts from "../bottom/shorts";
import Active from "../bottom/active";
import SweatPants from "../bottom/sweatPants";
import Shirts from "../Tops/shirts";
import TShirts from "../Tops/t-shirt";
import GraphicTShirt from "../Tops/graphicTees";
import Hoodies from "../Tops/hoodies";
import Sweaters from "../Tops/sweater";

import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
import Categories from "../categories";
import Colors from "../colors";
import Size from "../size";
import Length from "../length";
import Style from "../style";
import Materials from "../material";

const Filter = () => {
  const [isOpenBottom, setIsOpenApparel] = useState(false);
  const [isOpenNewArrival, setIsOpenNewArrivals] = useState(false);
  const [isOpenTop, setIsOpenTops] = useState(false);
  const [isOpenActive, setIsOpenActives] = useState(false);
  const [isOpenSwimwear, setIsOpenSwimwears] = useState(false);
  const [isOpenSuits, setIsOpenSuits] = useState(false);
  const [isOpenCoatJacket, setIsOpenCoatJackets] = useState(false);
  const [isOpenAccessories, setIsOpenAccessories] = useState(false);
  const [isOpenMatchingSets, setIsOpenMatchingSets] = useState(false);
  const [isOpenCologne, setIsOpenColognes] = useState(false);

  const toggleTopMenu = () => {
    setIsOpenTops(!isOpenTop);
  };

  const toggleActiveMenu = () => {
    setIsOpenActives(!isOpenActive);
  };

  const toggleSwimwearMenu = () => {
    setIsOpenSwimwears(!isOpenSwimwear);
  };

  const toggleCologneMenu = () => {
    setIsOpenColognes(!isOpenCologne);
  };

  const toggleMatchingSetsMenu = () => {
    setIsOpenMatchingSets(!isOpenMatchingSets);
  };

  const toggleAccessoriesMenu = () => {
    setIsOpenAccessories(!isOpenAccessories);
  };
  const toggleCoatJacketMenu = () => {
    setIsOpenCoatJackets(!isOpenCoatJacket);
  };

  const toggleSuitsMenu = () => {
    setIsOpenSuits(!isOpenSuits);
  };

  const toggleBottomMenu = () => {
    setIsOpenApparel(!isOpenBottom);
  };

  const toggleNewArrivalMenu = () => {
    setIsOpenNewArrivals(!isOpenNewArrival);
  };

  return (
    <div className="w-52 min-h-screen">
      <hr />
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
          <span>{isOpenBottom ? <FaChevronDown /> : <FaChevronRight />}</span>
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

        <div
          onClick={toggleTopMenu}
          className="flex gap-2 items-center cursor-pointer mt-2"
        >
          <span>{isOpenTop ? <FaChevronDown /> : <FaChevronRight />}</span>
          <span className="font-semibold">Tops</span>
        </div>
        {isOpenTop && (
          <ul className="ml-8 mt-2 space-y-2">
            <li>
              <Shirts />
            </li>
            <li>
              <a href="#">
                <TShirts />
              </a>
            </li>
            <li>
              <a href="#">
                <GraphicTShirt />
              </a>
            </li>
            <li>
              <a href="#">
                <Hoodies />
              </a>
            </li>
            <li>
              <a href="#">
                <Sweaters />
              </a>
            </li>
            <li>
              <a href="#">Polos</a>
            </li>
            <li>
              <a href="#">Active</a>
            </li>
          </ul>
        )}
        <div
          onClick={toggleActiveMenu}
          className="flex gap-2 items-center cursor-pointer mt-2"
        >
          <span>{isOpenActive ? <FaChevronDown /> : <FaChevronRight />}</span>
          <span className="font-semibold">Active</span>
        </div>
        {isOpenActive && (
          <ul className="ml-8 mt-2 space-y-2">
            <li>
              <a href="#">YPB Tops</a>
            </li>
            <li>
              <a href="#">YBP Bottoms</a>
            </li>
            <li>
              <a href="#">YPB Accessories</a>
            </li>
          </ul>
        )}

        <div
          onClick={toggleSwimwearMenu}
          className="flex gap-2 items-center cursor-pointer mt-2"
        >
          <span>{isOpenSwimwear ? <FaChevronDown /> : <FaChevronRight />}</span>
          <span className="font-semibold">Swimwear</span>
        </div>
        {isOpenSwimwear && (
          <ul className="ml-8 mt-2 space-y-2">
            <li>
              <a href="#">Swim Accessories</a>
            </li>
          </ul>
        )}

        <div
          onClick={toggleSuitsMenu}
          className="flex gap-2 items-center cursor-pointer mt-2"
        >
          <span>{isOpenSuits ? <FaChevronDown /> : <FaChevronRight />}</span>
          <span className="font-semibold">Suits</span>
        </div>
        {isOpenSuits && (
          <ul className="ml-8 mt-2 space-y-2">
            <li>
              <a href="#">Suits</a>
            </li>
            <li>
              <a href="#">Top</a>
            </li>
            <li>
              <a href="#">Bottom</a>
            </li>
          </ul>
        )}

        <div
          onClick={toggleCoatJacketMenu}
          className="flex gap-2 items-center cursor-pointer mt-2"
        >
          <span>
            {isOpenCoatJacket ? <FaChevronDown /> : <FaChevronRight />}
          </span>
          <span className="font-semibold">CoatJacket</span>
        </div>
        {isOpenCoatJacket && (
          <ul className="ml-8 mt-2 space-y-2">
            <li>
              <a href="#">Jacket & Bombers</a>
            </li>
            <li>
              <a href="#">Vests</a>
            </li>
            <li>
              <a href="#">Blazers</a>
            </li>
          </ul>
        )}

        <div
          onClick={toggleAccessoriesMenu}
          className="flex gap-2 items-center cursor-pointer mt-2"
        >
          <span>
            {isOpenAccessories ? <FaChevronDown /> : <FaChevronRight />}
          </span>
          <span className="font-semibold">Accessories</span>
        </div>
        {isOpenAccessories && (
          <ul className="ml-8 mt-2 space-y-2">
            <li>
              <a href="#">Hats</a>
            </li>
            <li>
              <a href="#">Belts</a>
            </li>
            <li>
              <a href="#">Socks</a>
            </li>
            <li>
              <a href="#">Watch & Jewelry</a>
            </li>
            <li>
              <a href="#">Bag & Wallets</a>
            </li>
            <li>
              <a href="#">Active</a>
            </li>
          </ul>
        )}

        <div
          onClick={toggleMatchingSetsMenu}
          className="flex gap-2 items-center cursor-pointer mt-2"
        >
          <span>
            {isOpenMatchingSets ? <FaChevronDown /> : <FaChevronRight />}
          </span>
          <span className="font-semibold">MatchingSets</span>
        </div>
        {isOpenMatchingSets && (
          <ul className="ml-8 mt-2 space-y-2">
            <li>
              <a href="#">Fashion Sets</a>
            </li>
            <li>
              <a href="#">Fleece Sets</a>
            </li>
            <li>
              <a href="#">Active Sets</a>
            </li>
          </ul>
        )}

        <div
          onClick={toggleSwimwearMenu}
          className="flex gap-2 items-center cursor-pointer mt-2"
        >
          <span>{isOpenSwimwear ? <FaChevronDown /> : <FaChevronRight />}</span>
          <span className="font-semibold">Swimwear</span>
        </div>
        {isOpenSwimwear && (
          <ul className="ml-8 mt-2 space-y-2">
            <li>
              <a href="#">Swim Accessories</a>
            </li>
          </ul>
        )}
      </div>

      <div
        onClick={toggleCologneMenu}
        className="flex gap-2 items-center cursor-pointer mt-2"
      >
        <span>{isOpenCologne ? <FaChevronDown /> : <FaChevronRight />}</span>
        <span className="font-semibold">Cologne</span>
      </div>
      {isOpenCologne && (
        <ul className="ml-8 mt-2 space-y-2">
          <li>
            <a href="#">Cologne</a>
          </li>
          <li>
            <a href="#">Gift Sets & candles</a>
          </li>
          <li>
            <a href="#">Body care & Sprays</a>
          </li>
        </ul>
      )}
      <Categories />
      <Colors />
      <Size />
      <Length />
      <Style />
      <Materials />
    </div>
  );
};

export default Filter;
