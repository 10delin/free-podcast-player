import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  width: 100%;
  ${({ $actualEpisode }) => ($actualEpisode ? "margin-bottom: 110px;" : "")}
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;

  @media (max-width: 768px) {
    width: 100%;
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

export const StyledWrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

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

export const StyledEpisodeImage = styled.img`
  position: relative;
  display: flex;
  height: 300px;
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: #ffffff;
  font-weight: 500;
  margin-left: 100px;

  box-icon {
    width: 30px;
    height: 30px;
    fill: #2593e0;
  }
`;

export const StyledButton = styled.div`
  position: relative;

  box-icon {
    width: 50px;
    height: 50px;
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
