import React, { useContext, useState } from "react";
import CardTaskStyle from "./CardTaskStyle";
import Modal from "./modal/Modal";
import { UserContext } from "../../pages/HomePage";

function CardTask({ title, subTasks }) {
  const UserData = useContext(UserContext);
  const [showEditModal, setShowEditModal] = useState(false);
  const [checkedElementState, setCheckedElement] = useState([]);
  const checkedElement = (clickedTitle) => {
    let ele = UserData.enterdData.filter((item) => item.title === clickedTitle);
    console.log(ele);
    return ele;
  };

  return (
    <CardTaskStyle>
      <div className="card_container">
        <h3
          className="title_Task"
          onClick={(e) => {
            const clickedTitle = e.target.textContent;
            setCheckedElement(checkedElement(clickedTitle));
            setShowEditModal(true);
          }}
        >
          {title}
        </h3>
        <p className="subTasks">0 of{subTasks.length} Subtasks</p>
      </div>
      {showEditModal && (
        <Modal
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          checkedElement={checkedElementState}
        />
      )}
    </CardTaskStyle>
  );
}

export default CardTask;
