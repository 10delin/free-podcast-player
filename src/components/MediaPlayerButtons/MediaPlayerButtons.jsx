import { styled } from "styled-components";
import PropTypes from "prop-types";

import { PlayMediaButton } from "../PlayButtons/PlayButtons";
import { useDispatch, useSelector } from "react-redux";
import {
  resetIsPlaying,
  setActualEpisode,
  setIsPlaying,
} from "../../redux/reducers/actualEpisodeSlice";

const StyledWrapper = styled.div`
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

const StyledButtons = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CustomBoxIcon = styled.div`
  width: ${({ name }) =>
    name === "shuffle" || name === "repeat" ? "30px" : "40px"};
  height: ${({ name }) =>
    name === "shuffle" || name === "repeat" ? "30px" : "40px"};
  fill: white;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #4a52c0;
  }

  box-icon {
    width: 100%;
    height: 100%;
  }
`;

export const MediaPlayerButtons = ({ podcast }) => {
  const dispatch = useDispatch();
  const currentEpisodeId = useSelector((state) => state.actualEpisode.data.id);
  const currentPodcastId = parseInt(currentEpisodeId.toString()[0]);

  const currentPodcast = podcast.find(
    (podcast) => podcast.id === currentPodcastId
  );

  const handlePrevious = () => {
    const currentIndex = currentPodcast.episodes.findIndex(
      (episode) => episode.id === currentEpisodeId
    );
    if (currentIndex > 0) {
      const previousEpisode = currentPodcast.episodes[currentIndex - 1];
      dispatch(resetIsPlaying());
      setTimeout(() => {
        dispatch(setActualEpisode(previousEpisode));
        dispatch(setIsPlaying(true));
      }, 100);
    }
  };

  const handleNext = () => {
    const currentIndex = currentPodcast.episodes.findIndex(
      (episode) => episode.id === currentEpisodeId
    );
    if (currentIndex < currentPodcast.episodes.length - 1) {
      const nextEpisode = currentPodcast.episodes[currentIndex + 1];
      dispatch(resetIsPlaying());
      setTimeout(() => {
        dispatch(setActualEpisode(nextEpisode));
        dispatch(setIsPlaying(true));
      }, 100);
    }
  };

  return (
    <StyledWrapper>
      <StyledContent>
        <StyledButtons>
          <CustomBoxIcon name="shuffle">
            <box-icon name="shuffle" />
          </CustomBoxIcon>
          <CustomBoxIcon name="skip-previous" onClick={handlePrevious}>
            <box-icon name="skip-previous" />
          </CustomBoxIcon>
          <PlayMediaButton />
          <CustomBoxIcon name="skip-next" onClick={handleNext}>
            <box-icon name="skip-next" />
          </CustomBoxIcon>
          <CustomBoxIcon name="repeat">
            <box-icon name="repeat" />
          </CustomBoxIcon>
        </StyledButtons>
      </StyledContent>
    </StyledWrapper>
  );
};

MediaPlayerButtons.propTypes = {
  podcast: PropTypes.array.isRequired,
};
