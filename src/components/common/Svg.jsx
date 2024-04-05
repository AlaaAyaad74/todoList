import React from "react";

function Svg({ svgPath, width, height }) {
  return (
    <span>
      <img src={svgPath} alt="svg" style={{ width, height }} />
    </span>
  );
}

export default Svg;
