import styled from "styled-components";

export default styled.div`
  gap: 25px;
  .Title_column {
    font-size: 1.1rem;
    color: var(--text-color);

    justify-content: center;
    width: 100%;
  }
  .Title_column div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: green;
    margin-inline-end: 10px;
  }
  @media (max-width: 810px) {
    .Title_column {
      justify-content: flex-start;
    }
  }
`;
