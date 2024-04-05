import React, { useRef, useState } from "react";
import AsideBarStyle from "./AsideBarStyle";
import Logo from "../header/Logo";
import AsideIcon from "./../../assets/border-none-solid.svg";
import { Link } from "react-router-dom";
import Svg from "../common/Svg";
import SvgAside from "./SvgAside";

function Aside({ setShowSide, showSide }) {
  const [state, setState] = useState(0);
  const links = [
    {
      name: "Platform Launch",
      class: "active",
    },
    {
      name: "Markting Plan",
      class: "",
    },
    {
      name: "Roadmap",
      class: "",
    },
  ];

  return (
    <AsideBarStyle className="Flex_H">
      <div
        className="logo"
        onClick={() => {
          setShowSide(false);
        }}
      >
        <Logo />
      </div>
      <div className="asid_containr">
        <p className="subTitle">ALL BOARDS (8)</p>
        <div className="links Flex_H">
          {links.map((item, index) => (
            <Link
              //   to={"/"}
              onClick={() => {
                setState(index);
              }}
              className={`Flex_Z ${index === state ? "active" : ""}`}
              key={index}
            >
              <SvgAside />
              <span>{item.name}</span>
            </Link>
          ))}
          <Link to={"/"} className="add_Board Flex_Z">
            <SvgAside />
            +Create New Board
          </Link>
        </div>
      </div>
      <Link
        id="Hide"
        onClick={() => {
          setShowSide(false);
        }}
      >
        Hide Sidebar
      </Link>
    </AsideBarStyle>
  );
}

export default Aside;
