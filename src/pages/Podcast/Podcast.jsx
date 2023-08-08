import { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFetchPodcastsQuery } from "../../redux/features/podcastsApi";

import { TITLES_BAR_EPISODES } from "../../utils/model";
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
import { setIsPlaying } from "../../redux/reducers/actualEpisodeSlice";

export const Podcast = () => {
  const { data: podcasts, isLoading: loading } = useFetchPodcastsQuery();
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  const actualEpisode = useSelector((state) => state.actualEpisode);
  const { isPlaying } = useSelector((state) => state.actualEpisode);
  const dispatch = useDispatch();

  const id = parseInt(useParams().id);
  const Navigate = useNavigate();

  const podcast = podcasts?.find((podcast) => podcast?.id === id);

  const playEpisode = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  useLayoutEffect(() => {
    if (podcast) {
      setFilteredEpisodes(podcast.episodes);
    }
  }, [podcast]);

  return (
    !loading && (
      <StyledWrapper $actualEpisode={actualEpisode}>
        <StyledContent data-cy="podcast-content">
          <StyledBarContent>
            <StyledBackButton
              onClick={() => Navigate(`/`)}
              data-cy="go-to-home"
            >
              <box-icon name="chevron-left" color="white" />
            </StyledBackButton>
            <SearchBar
              originalPodcasts={podcast?.episodes}
              setFilteredContent={setFilteredEpisodes}
            />
          </StyledBarContent>
          <StyledEpisodeImage src={podcast?.imageUrl} alt="picture" />
          <StyledWrapperTitle>
            <StyledButton $isPlaying={isPlaying} onClick={playEpisode}>
              {isPlaying ? <box-icon name="pause" /> : <box-icon name="play" />}
            </StyledButton>
            <StyledTitle>
              <h2>{podcast?.title}</h2>
              <box-icon type="solid" name="badge-check" />
            </StyledTitle>
            <OrderBy
              originalPodcasts={podcast?.episodes}
              setFilteredContent={setFilteredEpisodes}
            />
          </StyledWrapperTitle>
          <TableContent
            content={filteredEpisodes}
            titles={TITLES_BAR_EPISODES}
          />
        </StyledContent>
      </StyledWrapper>
    )
  );
};
