import PropTypes from "prop-types";
import {
  resetIsPlaying,
  setActualEpisode,
  setIsPlaying,
} from "../../redux/reducers/actualEpisodeSlice";

import { StyledWrapper } from "../../styles/StyledMediaPreviousButton";

export const MediaPreviousButton = ({
  dispatch,
  currentPodcast,
  currentEpisodeId,
}) => {
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

  return (
    <StyledWrapper name="skip-previous" onClick={handlePrevious}>
      <box-icon name="skip-previous" />
    </StyledWrapper>
  );
};

MediaPreviousButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentPodcast: PropTypes.object.isRequired,
  currentEpisodeId: PropTypes.string.isRequired,
};
