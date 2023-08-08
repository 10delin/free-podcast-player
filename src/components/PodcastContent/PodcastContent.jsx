import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  StyledWrapper,
  StyledContent,
  StyledBarContent,
  StyledWrapperTitle,
  StyledBackButton,
  StyledEpisodeImage,
  StyledTitle,
  StyledButton,
} from "../../styles/StyledPodcast";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { TableContent } from "../../components/TableContent/TableContent";
import { TITLES_BAR_EPISODES } from "../../utils/model";

export const PodcastContent = ({
  podcast,
  actualEpisode,
  playEpisode,
  Navigate,
}) => {
  const [filteredEpisodes, setFilteredEpisodes] = useState(podcast.episodes);

  useEffect(() => {
    setFilteredEpisodes(podcast.episodes);
  }, [podcast]);

  return (
    <StyledWrapper $actualEpisode={actualEpisode}>
      <StyledContent data-cy="podcast-content">
        <StyledBarContent>
          <StyledBackButton onClick={() => Navigate(`/`)} data-cy="go-to-home">
            <box-icon name="chevron-left" color="white" />
          </StyledBackButton>
          <SearchBar
            originalPodcasts={podcast.episodes}
            setFilteredContent={setFilteredEpisodes}
          />
        </StyledBarContent>
        <StyledEpisodeImage src={podcast.imageUrl} alt="picture" />
        <StyledWrapperTitle>
          <StyledButton
            $isPlaying={actualEpisode.isPlaying}
            onClick={playEpisode}
          >
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
        <TableContent content={filteredEpisodes} titles={TITLES_BAR_EPISODES} />
      </StyledContent>
    </StyledWrapper>
  );
};

PodcastContent.propTypes = {
  podcast: PropTypes.object.isRequired,
  actualEpisode: PropTypes.object.isRequired,
  playEpisode: PropTypes.func.isRequired,
  Navigate: PropTypes.func.isRequired,
};
