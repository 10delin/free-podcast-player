import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  StyledWrapper,
  StyledContent,
  StyledButtons,
} from "../../styles/StyledMediaPlayerButtons";

import { MediaPlayButton } from "../PlayButtons/PlayButtons";
import { MediaAleatoryButton } from "../MediaAleatoryButton/MediaAleatoryButton";
import { MediaRepeatButton } from "../MediaRepeatButton/MediaRepeatButton";
import { MediaNextButton } from "../MediaNextButton/MediaNextButton";
import { MediaPreviousButton } from "../MediaPreviousButton/MediaPreviousButton";

export const MediaPlayerButtons = ({ podcast }) => {
  const dispatch = useDispatch();
  const currentEpisodeId = useSelector((state) => state.actualEpisode.data.id);
  const currentPodcast = podcast?.find(
    (podcast) => podcast.id === currentEpisodeId
  );

  return (
    <StyledWrapper>
      <StyledContent>
        <StyledButtons>
          <MediaAleatoryButton />
          <MediaPreviousButton
            dispatch={dispatch}
            currentPodcast={currentPodcast}
            currentEpisodeId={currentEpisodeId}
          />
          <MediaPlayButton />
          <MediaNextButton
            dispatch={dispatch}
            currentPodcast={currentPodcast}
            currentEpisodeId={currentEpisodeId}
          />
          <MediaRepeatButton />
        </StyledButtons>
      </StyledContent>
    </StyledWrapper>
  );
};

MediaPlayerButtons.propTypes = {
  podcast: PropTypes.array.isRequired,
};
