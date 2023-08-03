import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MediaPlayerBar = () => {
  const { actualPodcast } = useSelector((state) => state);

  return actualPodcast ? (
    <StyledWrapper data-cy="media-player-bar">
      <p>{actualPodcast?.title}</p>
      <p>{actualPodcast?.description}</p>
    </StyledWrapper>
  ) : null;
};
