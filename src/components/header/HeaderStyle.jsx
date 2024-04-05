import styled from "styled-components";

export default styled.div`
  height: 80px;
  padding: 0 40px;
  justify-content: space-between;
  background-color: var(--secondary-color);
  .main__title {
    position: absolute;
    left: 300px;
    color: var(--titles-text-color);
  }
  .AddTask {
    background-color: var(--btn-color);
  }
  .logo__Icon,
  .plus_svg {
    display: none;
  }
  .logo {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    .logo,
    .text {
      display: none;
    }
    .main__title {
      position: static;
    }
    .logo__Icon,
    .plus_svg {
      display: block;
    }
  }
  @media (max-width: 450px) {
    padding: 0 20px;
  }
`;
