import React from "react";
import exitIcon from "../../../assets/xmark-solid.svg";
function SubTitelInput({
  placeHolder,
  handleDelete,
  savedData,
  index,
  indexofSpecialArray,
}) {
  console.log(index);
  return (
    <div>
      <div className="Flex_Z" style={{ gap: "8px" }}>
        <input
          placeholder={`${placeHolder}`}
          type="text"
          onChange={(e) => {
            savedData[indexofSpecialArray].subTasks[index].sub = e.target.value;
            // console.log(e.target.value);
            console.log(savedData);
          }}
        />
        <label style={{ width: "24px", height: "24px" }} onClick={handleDelete}>
          <img src={exitIcon} alt="exitIcon" />
        </label>
      </div>
    </div>
  );
}

export default SubTitelInput;
