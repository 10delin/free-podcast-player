import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color: #1a1a1a;
  border-radius: 25px;
`;

export const StyledSelect = styled.select`
  position: relative;
  border: none;
  background-color: #1a1a1a;
  color: #ffffff;
  border: 2px solid transparent;
  padding: 12px 10px;
  width: 100%;
  border-radius: 25px;
  font-size: 13px;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 2px solid #ffffff;
  }
`;

export const StyledOption = styled.option`
  background-color: #2a2a2a;
  color: #ffffff;
  border: 2px solid transparent;
  padding: 15px 10px;
  font-size: 13px;
  width: 100%;
  margin-right: 20px;
  border-radius: 25px;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 2px solid #ffffff;
  }

  &:checked {
    background-color: #414141;
  }
`;

export const StyledButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  box-icon {
    width: 30px;
    height: 30px;
    fill: white;
    border-radius: 50%;
    z-index: 1;
  }
`;
