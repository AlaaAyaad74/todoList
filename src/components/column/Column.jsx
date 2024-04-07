import React from "react";
import CardTask from "../card/CardTask";
import ColumnStyle from "./ColumnStyle";

function Column({ titel, color, todos }) {
  return (
    <ColumnStyle className="Flex_H">
      <h2 className="Title_column Flex_Z">
        <div className="circle" style={{ backgroundColor: color }}></div>
        {titel} {`(${todos.length})`}
      </h2>

      {todos.map((item, index) => (
        <CardTask key={index} title={item.title} subTasks={item.subTasks} />
      ))}
    </ColumnStyle>
  );
}

export default Column;
