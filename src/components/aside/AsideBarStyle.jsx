import styled from "styled-components";

export default styled.div`
  width: 300px;
  height: 100%;
  position: absolute;
  left: -10px;
  top: 0;
  background-color: var(--secondary-color);
  padding: 20px 35px;
  align-items: flex-start;
  z-index: 999;
  .asid_containr {
    text-align: start;
    position: relative;
    width: 100%;
  }

  .subTitle {
    margin: 2rem 0;
    color: var(--text-color);
  }
  .links {
    position: absolute;
    width: 280px;
    left: -45px;
    row-gap: 4px;
  }
  .links a {
    width: 100%;
    padding-inline-start: 40px;
    background-color: var(--btn-color);
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    gap: 0.5rem;
    color: var(--text-color);
    border-radius: 40px;
    background-color: transparent;
  }
  .links a svg {
    fill: var(--text-color);
  }
  .active {
    background-color: var(--btn-color) !important;
    color: var(--titles-text-color) !important;
  }
  .active svg {
    fill: var(--titles-text-color) !important;
  }
  .add_Board,
  .add_Board svg {
    color: var(--btn-color) !important;
    fill: var(--btn-color) !important;
  }
  #Hide {
    position: absolute;
    bottom: 40px;
    left: 10px;
    color: var(--text-color);
  }
`;
