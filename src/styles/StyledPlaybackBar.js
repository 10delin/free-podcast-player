import { styled } from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 50%;
`;

export const StyledProgressBar = styled.progress`
  border-radius: 3px;
  height: 5px;
  appearance: none;
  background-color: #5e5e5e;
  width: 100%;

  &::-webkit-progress-bar {
    background-color: #5e5e5e;
    border-radius: 50%;
  }

  &::-webkit-progress-value {
    background-color: #ffffff;
  }
`;
