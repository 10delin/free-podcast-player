import styled from "styled-components";

export const StyledEmptyPodcast = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;

  & > p {
    font-size: 30px;
  }

  & > button {
    margin-top: 20px;
    background-color: #424242;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #777777;
    }
  }
`;
