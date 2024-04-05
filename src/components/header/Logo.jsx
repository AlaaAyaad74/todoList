import React from "react";
import Svg from "../common/Svg";
import Charts from "../../assets/chart-simple-solid.svg";
function Logo() {
  return (
    <div
      style={{ width: "145px", justifyContent: "space-between" }}
      className="Flex_Z"
    >
      <Svg svgPath={Charts} width={"24px"} height={"24px"} />
      <h1 style={{ color: "var(--titles-text-color)" }}>Kanban</h1>
    </div>
  );
}

export default Logo;
