import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const StyledTitles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

export const StyledTitleItem = styled.p`
  width: 20%;
  margin: 0;
  font-size: 13px;
  color: #808080;

  &:first-child {
    width: 5%;
  }
  ${[30, 30, 10, 5]
    .map((width, index) => `&:nth-child(${index + 2}) { width: ${width}%; }`)
    .join("")}

  box-icon {
    fill: #808080;
    width: 20px;
    height: 20px;
  }
`;
