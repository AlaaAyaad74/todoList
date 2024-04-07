import React, { createContext, useEffect, useRef, useState } from "react";
import Header from "../components/header/Header";
import HomePageStyle from "./HomePageStyle";
import Column from "./../components/column/Column";

export const UserContext = createContext();

function HomePage() {
  const tasks = [
    {
      title: "",
      describtion: "",
      subTasks: [
        { sub: "", placeHolder: "e.g. Take coffee", checked: false },
        { sub: "", placeHolder: "drinking coffee and smile", checked: false },
      ],
      status: "",
    },
  ];

  const [enterdData, setEnterdData] = useState(tasks);
  const [ALLTODOS, setALLTODOS] = useState(enterdData);
  useEffect(() => {
    setALLTODOS(enterdData);
  }, [enterdData]);

  let TODO = ALLTODOS.filter((item) => item.status === "TODO");
  let DOING = ALLTODOS.filter((item) => item.status === "DOING");
  let DONE = ALLTODOS.filter((item) => item.status === "DONE");
  return (
    <UserContext.Provider value={{ enterdData, setEnterdData }}>
      <HomePageStyle>
        <Header />
        <div className="divide">
          <Column titel={"TODO"} color={"#47c1e5"} todos={TODO} />
          <Column titel={"DOING"} color={"#8470f2"} todos={DOING} />
          <Column titel={"DONE"} color={"#6de5b1"} todos={DONE} />
          {/* <AddForm /> */}
        </div>
      </HomePageStyle>
    </UserContext.Provider>
  );
}

export default HomePage;
