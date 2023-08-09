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
  podcast: PropTypes.object.isRequired,
  setFilteredEpisodes: PropTypes.func,
};
