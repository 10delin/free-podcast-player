import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${({ $isAleatory }) => ($isAleatory ? "#1ed45f" : "#ffffff")};
  border-radius: 50%;
  cursor: pointer;
  width: 30px;
  height: 30px;

  :hover {
    fill: #1ed45f;
  }

  span {
    display: ${({ $isAleatory }) => ($isAleatory ? "block" : "none")};
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #1ed45f;
    border-radius: 50%;
    bottom: -5px;
    left: 10px;
  }
`;
