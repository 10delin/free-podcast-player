import { styled } from "styled-components";

export const StyledMediaButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  box-icon {
    width: 40px;
    height: 40px;
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

export const StyledItemButtton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  box-icon {
    width: 40px;
    height: 40px;
    fill: white;
    border-radius: 50%;
    background-color: ${({ $isPlaying, $sameId }) =>
      $isPlaying && $sameId ? "#4a52c0" : "transparent"};
    cursor: pointer;

    &:hover {
      background-color: #4a52c0;
    }
  }
`;
