import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  StyledWrapper,
  StyledContent,
  StyledButtons,
} from "../../styles/StyledMediaPlayerButtons";

import { PlayMediaButton } from "../PlayButtons/PlayButtons";
import { MediaAleatoryButton } from "../MediaAleatoryButton/MediaAleatoryButton";
import { MediaRepeatButton } from "../MediaRepeatButton/MediaRepeatButton";
import { MediaNextButton } from "../MediaNextButton/MediaNextButton";
import { MediaPreviousButton } from "../MediaPreviousButton/MediaPreviousButton";

export const MediaPlayerButtons = ({ podcast }) => {
  const dispatch = useDispatch();
  const currentEpisodeId = useSelector((state) => state.actualEpisode.data.id);
  const currentPodcastId = parseInt(currentEpisodeId.toString()[0]);

  const currentPodcast = podcast?.find(
    (podcast) => podcast.id === currentPodcastId
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
          <PlayMediaButton />
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
