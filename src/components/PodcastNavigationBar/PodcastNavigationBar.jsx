import PropTypes from "prop-types";

import {
  StyledBarContent,
  StyledBackButton,
} from "../../styles/StyledPodcastNavigationBar";

import { SearchBar } from "../../components/SearchBar/SearchBar";

export const PodcastNavigationBar = ({
  Navigate,
  podcast,
  setFilteredEpisodes,
}) => {
  return (
    <StyledBarContent>
      <StyledBackButton onClick={() => Navigate(`/`)} data-cy="go-to-home">
        <box-icon name="chevron-left" color="white" />
      </StyledBackButton>
      <SearchBar
        originalPodcasts={podcast.episodes}
        setFilteredContent={setFilteredEpisodes}
      />
    </StyledBarContent>
  );
};

PodcastNavigationBar.propTypes = {
  Navigate: PropTypes.func.isRequired,
  podcast: PropTypes.shape({
    episodes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  setFilteredEpisodes: PropTypes.func.isRequired,
};
