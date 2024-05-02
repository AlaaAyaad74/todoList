import styled from "styled-components";

export default styled.div`
  .card_container {
    background-color: var(--secondary-color);
    border-radius: 8px;
    padding: 1.5em 1.1em;
    width: 90%;
    margin: auto;
  }
  .card_container .title_Task {
    font-size: 1rem;
    color: var(--titles-text-color);
    margin-bottom: 10px;
    cursor: pointer;
  }
  .card_container .subTasks {
    color: var(--text-color);
    font-size: 0.85rem;
  }
`;
