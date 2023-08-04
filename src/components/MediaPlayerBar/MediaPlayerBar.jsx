import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setIsPlaying } from "../../redux/reducers/actualEpisodeSlice";

import PODCASTS from "../../data/mockPodcasts.json";

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const StyledContentName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  color: #808080;
  p {
    margin: 0;
    padding: 0;
  }
`;

const StyledNameTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-weight: 500;
`;

const StyledImage = styled.img`
  position: relative;
  width: 110px;
  height: 110px;
`;

const StyledFullName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const MediaPlayerBar = () => {
  const { data, isPlaying } = useSelector((state) => state.actualEpisode);
  const dispatch = useDispatch();
  const podcastId = Math.floor(data.id / 100);

  const getAuthor = () => {
    const author = PODCASTS?.podcasts?.find(
      (podcast) => podcast.id === podcastId
    );
    return author?.author;
  };

  const playEpisode = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  return data ? (
    <StyledWrapper data-cy="media-player-bar">
      <StyledContent>
        <StyledImage src={data?.imageUrl} alt={data?.title} />
        <StyledContentName>
          <StyledFullName>
            <StyledNameTitle>{data.title}</StyledNameTitle>
            <p>{getAuthor()}</p>
          </StyledFullName>
          <button onClick={playEpisode}>{isPlaying ? "⏸" : "⏯"}</button>
        </StyledContentName>
      </StyledContent>
    </StyledWrapper>
  ) : null;
};
