import PropTypes from "prop-types";

import {
  StyledWrapperTitle,
  StyledTitle,
  StyledButton,
} from "../../styles/StyledPodcastWrapperTitle";

import { OrderBy } from "../../components/OrderBy/OrderBy";

export const PodcastWrapperTitle = ({
  podcast,
  actualEpisode,
  playEpisode,
  setFilteredEpisodes,
}) => {
  return (
    <StyledWrapperTitle>
      <StyledButton $isPlaying={actualEpisode.isPlaying} onClick={playEpisode}>
        {actualEpisode.isPlaying ? (
          <box-icon name="pause" />
        ) : (
          <box-icon name="play" />
        )}
      </StyledButton>
      <StyledTitle>
        <h2>{podcast.title}</h2>
        <box-icon type="solid" name="badge-check" />
      </StyledTitle>
      <OrderBy
        originalPodcasts={podcast.episodes}
        setFilteredContent={setFilteredEpisodes}
      />
    </StyledWrapperTitle>
  );
};

PodcastWrapperTitle.propTypes = {
  podcast: PropTypes.object.isRequired,
  actualEpisode: PropTypes.object.isRequired,
  playEpisode: PropTypes.func.isRequired,
  setFilteredEpisodes: PropTypes.func.isRequired,
};
