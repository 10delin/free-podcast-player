import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: white;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  &:hover {
    background-color: #4a52c0;
  }

  box-icon {
    width: 100%;
    height: 100%;
  }
`;
