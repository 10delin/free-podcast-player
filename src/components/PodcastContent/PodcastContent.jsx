import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { TITLES_BAR_EPISODES } from "../../utils/model";
import {
  StyledWrapper,
  StyledContent,
  StyledEpisodeImage,
} from "../../styles/StyledPodcast";

import { TableContent } from "../../components/TableContent/TableContent";
import { PodcastNavigationBar } from "../PodcastNavigationBar/PodcastNavigationBar";
import { PodcastWrapperTitle } from "../PodcastWrapperTitle/PodcastWrapperTitle";

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
        <PodcastNavigationBar Navigate={Navigate} podcast={podcast} />
        <StyledEpisodeImage src={podcast.imageUrl} alt="picture" />
        <PodcastWrapperTitle
          podcast={podcast}
          actualEpisode={actualEpisode}
          playEpisode={playEpisode}
          setFilteredEpisodes={setFilteredEpisodes}
        />
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
