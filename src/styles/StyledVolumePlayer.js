import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  margin-right: 5px;
`;
export const StyledVolumeBar = styled.input`
  width: 100px;
  height: 5px;
  background-color: #5e5e5e;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ffffff;
  }
`;
