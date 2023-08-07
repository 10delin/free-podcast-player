import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import styled from "styled-components";

import {
  setActualEpisode,
  setIsPlaying,
} from "../../redux/reducers/actualEpisodeSlice";
import { useState } from "react";
import { PodcastItem } from "../PodcastItem/PodcastItem";
import { EpisodeItem } from "../EpisodeItem/EpisodeItem";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const StylesWrapperPodcast = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #1b1c20;
  padding: 2px 0;
  cursor: pointer;

  &:hover {
    background-color: #383737;
  }
`;

export const TableItem = ({ item, isTitlesPodcast }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const { isPlaying, data } = useSelector((state) => state.actualEpisode);

  const sameId = data.id === item.id;
  const samePodcastId = Math.floor(data.id / 100) === item.id;

  const changeActualEpisode = (episode) => () => {
    dispatch(setActualEpisode(episode));
    dispatch(sameId ? setIsPlaying(!isPlaying) : setIsPlaying(true));
  };

  const goToPodcast = () => {
    navigate(`/podcast/${item.id}`);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <StyledWrapper data-cy="table-item">
        <StylesWrapperPodcast
          key={item.id}
          onClick={isTitlesPodcast ? goToPodcast : changeActualEpisode(item)}
          data-cy={isTitlesPodcast ? "go-to-podcast" : "change-actual-podcast"}
        >
          {isTitlesPodcast ? (
            <PodcastItem
              item={item}
              sameId={samePodcastId}
              isPlaying={isPlaying}
              handleImageLoad={handleImageLoad}
            />
          ) : (
            <EpisodeItem
              item={item}
              sameId={sameId}
              isPlaying={isPlaying}
              handleImageLoad={handleImageLoad}
              isLoaded={isLoaded}
            />
          )}
        </StylesWrapperPodcast>
      </StyledWrapper>
    </>
  );
};

TableItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  isTitlesPodcast: PropTypes.bool.isRequired,
};
