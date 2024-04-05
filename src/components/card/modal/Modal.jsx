import React, { useState } from "react";
import exitIcon from "../../../assets/xmark-solid.svg";
import ModalStyle from "../../add new task/AddFormStyle";
import MODStyle from "./MODStyle";
function Modal({ showEditModal, setShowEditModal, checkedElement }) {
  const [option, setOption] = useState(checkedElement[0].status);
  const [checkboxes, setCheckboxes] = useState(checkedElement[0].subTasks);
  console.log(checkedElement[0]);
  const handleCheckboxChange = (index) => {
    setCheckboxes((prevState) => {
      const updatedCheckboxes = [...prevState];
      updatedCheckboxes[index] = !updatedCheckboxes[index];
      return updatedCheckboxes;
    });
  };

  return (
    <ModalStyle>
      <MODStyle>
        <div className="Modal">
          <form className="Flex_H">
            <h4 className="Flex_Z">
              {checkedElement[0].title}
              <label
                style={{ width: "24px", height: "24px" }}
                onClick={() => setShowEditModal(!showEditModal)}
              >
                <img src={exitIcon} alt="exitIcon" />
              </label>
            </h4>

            <div>
              <label htmlFor="description" style={{ width: "100%" }}>
                {checkedElement[0].describtion}
              </label>
            </div>
            <label style={{ width: "100%" }}>
              Subtasks0 of {checkedElement[0].subTasks.length}
            </label>
            {checkboxes.map((item, index) => (
              <div className="subTasks" key={index}>
                <div className="checkbox_container Flex_Z">
                  <input
                    className="Flex_Z check_box"
                    type="checkbox"
                    checked={!item}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <label>{item.sub}</label>
                </div>
              </div>
            ))}

            <div className="subTasks">
              <label>Status</label>
              <select
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value={"TODO"}>TODO</option>
                <option value={"DOING"}>DOING</option>
                <option value={"DONE"}>DONE</option>
              </select>
            </div>
          </form>
        </div>
      </MODStyle>
    </ModalStyle>
  );
}

export default Modal;
