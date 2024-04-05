import React, { useState } from "react";
import Logo from "./Logo";
import HeaderStyle from "./HeaderStyle";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/chart-simple-solid.svg";
import Svg from "../common/Svg";
import PlusIcon from "../../assets/plus-solid.svg";

import Aside from "../aside/Aside";
import AddForm from "../add new task/AddForm";

function Header() {
  const [showSide, setShowSide] = useState(false);
  const [showFormAdd, setShowFormAdd] = useState(false);
  return (
    <HeaderStyle className="Flex_Z">
      <div className="logo" onClick={() => setShowSide(!showSide)}>
        <Logo />
      </div>
      <div className="logo__Icon" onClick={() => setShowSide(!showSide)}>
        <Svg svgPath={LogoIcon} width={"24px"} height={"24px"} />
      </div>
      <h2 className="main__title">Platform Launch</h2>
      <Link
        to={"/"}
        className="AddTask"
        onClick={() => {
          setShowFormAdd(!showFormAdd);
        }}
      >
        <span className="plus_svg">
          <Svg svgPath={PlusIcon} width={"24px"} height={"24px"} />
        </span>
        <span className="text">+ Add New Task</span>
      </Link>
      {showSide && <Aside setShowSide={setShowSide} showSide={showSide} />}
      {showFormAdd && (
        <AddForm showFormAdd={showFormAdd} setShowFormAdd={setShowFormAdd} />
      )}
    </HeaderStyle>
  );
}

export default Header;
