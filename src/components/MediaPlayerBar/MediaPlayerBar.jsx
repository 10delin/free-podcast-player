import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { setIsPlaying } from "../../redux/reducers/actualEpisodeSlice";

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
`;

const StyledContentName = styled.div`
  display: flex;
  flex-direction: column;
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

export const MediaPlayerBar = () => {
  const actualEpisode = useSelector((state) => state.actualEpisode);
  const data = actualEpisode.data;
  const isPlaying = actualEpisode.isPlaying;
  const dispatch = useDispatch();

  const playEpisode = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  return data ? (
    <StyledWrapper data-cy="media-player-bar">
      <StyledContent>
        <StyledImage src={data?.imageUrl} alt={data?.title} />
        <StyledContentName>
          <div>
            <StyledNameTitle>{data.title}</StyledNameTitle>
            <p>{data.author}</p>
          </div>
          <button onClick={playEpisode}>{isPlaying ? "⏸" : "⏯"}</button>
        </StyledContentName>
      </StyledContent>
    </StyledWrapper>
  ) : null;
};
