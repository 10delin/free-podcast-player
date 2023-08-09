import styled from "styled-components";

export const StyledBackButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  background-color: #1a1a1a;
  border: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #383737;
  }

  box-icon {
    width: 30px;
    height: 30px;
    fill: white;
  }
`;

export const StyledBarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;
