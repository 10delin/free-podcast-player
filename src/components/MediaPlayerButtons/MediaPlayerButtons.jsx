import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  resetIsPlaying,
  setActualEpisode,
  setIsPlaying,
} from "../../redux/reducers/actualEpisodeSlice";

import {
  StyledWrapper,
  StyledContent,
  StyledButtons,
  CustomBoxIcon,
} from "../../styles/StyledMediaPlayerButtons";

import { PlayMediaButton } from "../PlayButtons/PlayButtons";

export const MediaPlayerButtons = ({ podcast }) => {
  const dispatch = useDispatch();
  const currentEpisodeId = useSelector((state) => state.actualEpisode.data.id);
  const currentPodcastId = parseInt(currentEpisodeId.toString()[0]);

  const currentPodcast = podcast?.find(
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
