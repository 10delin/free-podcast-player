import { styled } from "styled-components";

export const StyledWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 20px 0;
  width: 15%;

  @media (max-width: 768px) {
    top: 80px;
    width: 100%;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  background-color: ${({ $isSpanish }) =>
    $isSpanish ? "#699eec" : "transparent"};
  color: #ffffff;
  border: 1px solid #7a7a7a;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${({ $isSpanish }) =>
      $isSpanish ? "#2472e7" : "#699eec"};
  }

  @media (max-width: 768px) {
    padding: 7px;
  }
`;

export const StyledImage = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
