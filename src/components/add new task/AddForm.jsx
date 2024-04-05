import React, { useContext, useState } from "react";
import AddFormStyle from "./AddFormStyle";
import exitIcon from "../../assets/xmark-solid.svg";
import SubTitelInput from "./subtitelinput/SubTitelInput";
import { UserContext } from "../../pages/HomePage";
function AddForm({ showFormAdd, setShowFormAdd }) {
  const UserData = useContext(UserContext);
  const [savedData, setSavedData] = useState(UserData.enterdData);

  function handleRemoveSubtitels(val) {
    let filterdValue = savedData[
      UserData.enterdData.length - 1
    ].subTasks.filter((item) => item !== val);
    console.log(filterdValue, "filterd value");
    savedData[savedData.length - 1].subTasks = [...filterdValue];
    setSavedData([...savedData]);
  }
  function handleAddSubtitle(e) {
    let cloned = [...savedData[UserData.enterdData.length - 1].subTasks];
    cloned = [
      ...cloned,
      (cloned[cloned.length] = { sub: "", placeHolder: "New subtitle" }),
    ];
    e.preventDefault();

    savedData[UserData.enterdData.length - 1].subTasks = [...cloned];
    setSavedData([...savedData]);
  }
  function save(e) {
    e.preventDefault();
    setSavedData([...savedData]);
    UserData.enterdData.push({
      title: "",
      describtion: "",
      subTasks: [
        { sub: "", placeHolder: "e.g. Take coffee" },
        { sub: "", placeHolder: "drinking coffee and smile" },
      ],
      status: "",
    });
    UserData.setEnterdData((PrevSavedData) => [...PrevSavedData]);
    console.log(UserData.enterdData);
  }
  return (
    <AddFormStyle>
      <div className="Modal">
        <form className="Flex_H">
          <h4 className="Flex_Z">
            Add New Task
            <label
              style={{ width: "24px", height: "24px" }}
              onClick={() => setShowFormAdd(!showFormAdd)}
            >
              <img src={exitIcon} alt="exitIcon" />
            </label>
          </h4>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="e.g. Take coffee breack"
              onChange={(e) => {
                savedData[UserData.enterdData.length - 1].title =
                  e.target.value;
                setSavedData([...savedData]);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="e.g. It's always good to take a break. This15minute break will recharge the battaries a little"
              onChange={(e) => {
                savedData[UserData.enterdData.length - 1].describtion =
                  e.target.value;
                setSavedData([...savedData]);
              }}
            ></textarea>
          </div>
          <div className="subTasks">
            <label htmlFor="subtasks">Subtasks</label>
            <div className="subTasks_cont">
              {savedData[UserData.enterdData.length - 1].subTasks.map(
                (item, index) => (
                  <SubTitelInput
                    placeHolder={item.placeHolder}
                    savedData={savedData}
                    index={index}
                    handleDelete={() => handleRemoveSubtitels(item)}
                    indexofSpecialArray={UserData.enterdData.length - 1}
                    key={index}
                  />
                )
              )}
            </div>

            {/* <SubTitelInput placeHolder={"drinking coffee and smile"} /> */}

            <button className="Add_New" onClick={(e) => handleAddSubtitle(e)}>
              +Add New Subtask
            </button>
          </div>
          <div className="subTasks">
            <label>Status</label>
            <select
              // value={se ?"TODO"}
              onChange={(e) => {
                savedData[UserData.enterdData.length - 1].status =
                  e.target.value;
                setSavedData([...savedData]);
              }}
            >
              <option value={"--"}>--</option>
              <option value={"TODO"}>TODO</option>
              <option value={"DOING"}>DOING</option>
              <option value={"DONE"}>DONE</option>
            </select>
          </div>
          <button
            type="submit"
            className="createTask"
            onClick={(e) => {
              save(e);
              setShowFormAdd(false);
            }}
          >
            Create Task
          </button>
        </form>
      </div>
    </AddFormStyle>
  );
}

export default AddForm;
