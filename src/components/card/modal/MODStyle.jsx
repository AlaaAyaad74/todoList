import styled from "styled-components";

export default styled.div`
  .checkbox_container {
    padding: 0.5em;
    background-color: var(--primary-color);
    justify-content: start;
  }
  .check_box {
    width: 15px !important;
    height: 15px !important;
    margin-bottom: 0px !important;
    margin-inline-end: 6px;
    background-color: transparent !important;
  }
  .checked {
    text-decoration: line-through;
  }
  .subTasks {
    gap: 3px;
  }
`;
