import { styled } from "styled-components";

export const StyledWrapper = styled.div`
  height: 110px;
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const StyledButtons = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CustomBoxIcon = styled.div`
  width: ${({ name }) =>
    name === "shuffle" || name === "repeat" ? "30px" : "40px"};
  height: ${({ name }) =>
    name === "shuffle" || name === "repeat" ? "30px" : "40px"};
  fill: white;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #4a52c0;
  }

  box-icon {
    width: 100%;
    height: 100%;
  }
`;
