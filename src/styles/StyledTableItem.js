import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const StylesWrapperPodcast = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #1b1c20;
  padding: 2px 0;
  cursor: pointer;

  &:hover {
    background-color: #383737;
  }
`;
