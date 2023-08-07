import { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PODCASTS from "../../data/mockPodcasts.json";
import { TITLES_BAR_EPISODES } from "../../utils/model";
import { styled } from "styled-components";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { TableContent } from "../../components/TableContent/TableContent";
import { setIsPlaying } from "../../redux/reducers/actualEpisodeSlice";

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
  align-items: center;
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

const StyledWrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
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
  display: flex;
  height: 300px;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: #ffffff;
  font-weight: 500;
  margin-left: 100px;

  box-icon {
    width: 30px;
    height: 30px;
    fill: #2593e0;
  }
`;

const StyledButton = styled.div`
  position: relative;

  box-icon {
    width: 50px;
    height: 50px;
    fill: white;
    border-radius: 50%;
    background-color: ${({ $isPlaying }) =>
      $isPlaying ? "#4a52c0" : "transparent"};
    cursor: pointer;

    &:hover {
      background-color: #4a52c0;
    }
  }
`;

export const Podcast = () => {
  const originalPodcasts = PODCASTS.podcasts;
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  const actualEpisode = useSelector((state) => state.actualEpisode);
  const { isPlaying } = useSelector((state) => state.actualEpisode);
  const dispatch = useDispatch();

  const id = parseInt(useParams().id);
  const Navigate = useNavigate();

  const podcast = [...originalPodcasts].find((podcast) => podcast?.id === id);

  const playEpisode = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  const getPodcastTitle = () => {
    const title = PODCASTS?.podcasts?.find(
      (podcasts) => podcasts.id === podcast.id
    );
    return title?.title;
  };

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
        <StyledEpisodeImage src={podcast?.imageUrl} alt="picture" />
        <StyledWrapperTitle>
          <StyledButton $isPlaying={isPlaying} onClick={playEpisode}>
            {isPlaying ? <box-icon name="pause" /> : <box-icon name="play" />}
          </StyledButton>
          <StyledTitle>
            <h2>{getPodcastTitle()}</h2>
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
