import React, { useState } from "react";
import exitIcon from "../../../assets/xmark-solid.svg";
import ModalStyle from "../../add new task/AddFormStyle";
import MODStyle from "./MODStyle";
function Modal({
  showEditModal,
  setShowEditModal,
  checkedElement,
  setCountDoneTask,
}) {
  const [option, setOption] = useState(checkedElement[0].status);
  const checkStatus = checkedElement[0].subTasks.map((item) => item.checked);
  const [checkboxes, setCheckboxes] = useState(checkStatus);
  const DoneTasksNum = () => checkboxes.filter((item) => item === true).length;
  const [doneTasks, setDoneTasks] = useState(DoneTasksNum);

  const handleChange = (index) => {
    checkboxes[index] = !checkboxes[index];
    setCheckboxes((checkboxes) => [...checkboxes]);
    DoneTasksNum();
    setDoneTasks(DoneTasksNum);
    checkedElement[0].subTasks[index].checked =
      !checkedElement[0].subTasks[index].checked;
    setCountDoneTask(DoneTasksNum);
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
              Subtasks{doneTasks} of {checkedElement[0].subTasks.length}
            </label>
            {checkedElement[0].subTasks.map((item, index) => (
              <div className="subTasks" key={index}>
                <div className="checkbox_container Flex_Z">
                  <input
                    id={`${index}label`}
                    className="Flex_Z check_box"
                    type="checkbox"
                    checked={checkboxes[index]}
                    onChange={() => {
                      handleChange(index);
                      console.log(checkboxes[index], index);
                    }}
                  />
                  <label
                    htmlFor={`${index}label`}
                    className={`${checkboxes[index] === true ? "checked" : ""}`}
                  >
                    {item.sub}
                  </label>
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
