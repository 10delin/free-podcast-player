import styled from "styled-components";

export const StyledWrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: #ffffff;
  font-weight: 500;
  margin-left: 100px;

  box-icon {
    width: 30px;
    height: 30px;
    fill: #2593e0;
  }
`;

export const StyledButton = styled.div`
  position: relative;

  box-icon {
    width: 50px;
    height: 50px;
    fill: white;
    border-radius: 50%;
    background-color: ${({ $isPlaying }) =>
      $isPlaying ? "#4a52c0" : "transparent"};
    cursor: pointer;

    &:hover {
      background-color: #4a52c0;
    }
  }
`;
