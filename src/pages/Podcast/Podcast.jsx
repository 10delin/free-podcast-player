import { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import PODCASTS from "../../data/mockPodcasts.json";
import { TITLES_BAR_EPISODES } from "../../utils/model";
import { styled } from "styled-components";
import EpisodeImage from "../../assets/images/episode-image.png";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { TableContent } from "../../components/TableContent/TableContent";
import { useSelector } from "react-redux";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  width: 100%;
  ${({ $actualEpisode }) => ($actualEpisode ? "margin-bottom: 110px;" : "")}
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 75%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledBarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

const StyledBackButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  background-color: #1a1a1a;
  border: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #383737;
  }

  box-icon {
    width: 30px;
    height: 30px;
    fill: white;
  }
`;

const StyledEpisodeImage = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 30px;
`;

export const Podcast = () => {
  const originalPodcasts = PODCASTS.podcasts;
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const actualEpisode = useSelector((state) => state.actualEpisode);

  const id = parseInt(useParams().id);
  const Navigate = useNavigate();

  const podcast = [...originalPodcasts].find((podcast) => podcast?.id === id);

  useLayoutEffect(() => {
    setFilteredEpisodes(podcast?.episodes);
  }, [podcast]);

  return (
    <StyledWrapper $actualEpisode={actualEpisode}>
      <StyledContent>
        <StyledBarContent>
          <StyledBackButton onClick={() => Navigate(`/`)} data-cy="go-to-home">
            <box-icon name="chevron-left" color="white" />
          </StyledBackButton>
          <SearchBar
            originalPodcasts={podcast.episodes}
            setFilteredContent={setFilteredEpisodes}
          />
        </StyledBarContent>
        <StyledEpisodeImage src={EpisodeImage} alt="picture" />
        <OrderBy
          originalPodcasts={podcast.episodes}
          setFilteredContent={setFilteredEpisodes}
        />
        <TableContent content={filteredEpisodes} titles={TITLES_BAR_EPISODES} />
      </StyledContent>
    </StyledWrapper>
  );
};
