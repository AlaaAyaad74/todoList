import styled from "styled-components";

export default styled.div`
  .divide {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 96%;
    margin: auto;
    background-color: var(--primary-color);
    padding: 20px;
    gap: 25px;
  }
  @media (max-width: 810px) {
    .divide {
      grid-template-columns: 1fr;
      max-width: 700px;
    }
  }
`;
