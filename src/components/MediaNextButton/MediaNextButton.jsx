import PropTypes from "prop-types";
import {
  resetIsPlaying,
  setActualEpisode,
  setIsPlaying,
} from "../../redux/reducers/actualEpisodeSlice";

import { StyledWrapper } from "../../styles/StyledMediaNextButton";

export const MediaNextButton = ({
  dispatch,
  currentPodcast,
  currentEpisodeId,
}) => {
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
    <StyledWrapper name="skip-next" onClick={handleNext}>
      <box-icon name="skip-next" />
    </StyledWrapper>
  );
};

MediaNextButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentPodcast: PropTypes.object.isRequired,
  currentEpisodeId: PropTypes.string.isRequired,
};
