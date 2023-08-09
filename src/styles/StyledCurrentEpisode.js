import { styled } from "styled-components";

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 25%;
`;

export const StyledContentName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  color: #808080;
  p {
    margin: 0;
    padding: 0;
  }
`;

export const StyledNameTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-weight: 500;

  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

export const StyledImage = styled.img`
  position: relative;
  width: 110px;
  height: 110px;

  @media (max-width: 1100px) {
    width: 70px;
    height: 70px;
  }
`;

export const StyledFullName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;
