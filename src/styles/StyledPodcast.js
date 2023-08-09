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

export const StyledEpisodeImage = styled.img`
  position: relative;
  display: flex;
  height: 300px;
`;
