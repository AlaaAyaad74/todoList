import styled from "styled-components";

export default styled.div`
  position: absolute;
  .Modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .Modal:before {
    position: fixed;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .Modal form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 330px;
    height: 545px;
    padding: 1.5em 1em;
    background-color: var(--secondary-color);
    gap: 15px;
    overflow-y: hidden;
  }
  .Modal form h4 {
    color: var(--titles-text-color);
    width: 100%;
    justify-content: space-between;
  }
  .Modal form h4 label {
    cursor: pointer;
  }
  .Modal form > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .Modal form input,
  .Modal form select,
  .Modal form button {
    outline: none;
    height: 30px;
  }
  .Modal form label {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--titles-text-color);
  }
  .Modal form textarea {
    height: 100px;
    max-height: 100px;
    max-width: 297px;
  }
  .Modal form input,
  .Modal form textarea,
  .Modal form select,
  .Modal form select option {
    font-size: 0.85rem;
    color: var(--text-color);
    font-weight: 600;
    padding: 1em;
    background-color: var(--secondary-color);
    outline: none;
    border: 1px solid var(--text-color);
  }
  .Modal form select {
    padding: 0px 6px;
    border-radius: 6px;
  }
  .subTasks {
    gap: 5px;
  }
  .subTasks input {
    margin-bottom: 5px;
    width: 90%;
  }
  .subTasks span {
    width: 10%;
  }
  .Modal form button {
    border: none;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer;
  }
  .Add_New {
    background-color: var(--titles-text-color);
    color: var(--btn-color);
  }
  .Modal form .createTask {
    width: 100%;
    color: var(--titles-text-color);
    background-color: var(--btn-color);
  }
  .subTasks_cont {
    overflow-y: scroll;
    height: 70px;
  }
  @media (max-width: 810px) {
    form {
      width: 90% !important;
    }
  }
`;
