import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  resetIsPlaying,
  setActualEpisode,
  setIsPlaying,
} from "../../redux/reducers/actualEpisodeSlice";
import PropTypes from "prop-types";

import {
  StyledWrapper,
  StylesWrapperPodcast,
} from "../../styles/StyledTableItem";

import { PodcastItem } from "../PodcastItem/PodcastItem";
import { EpisodeItem } from "../EpisodeItem/EpisodeItem";

export const TableItem = ({ item, isTitlesPodcast }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const { isPlaying, data } = useSelector((state) => state.actualEpisode);

  const sameId = data.id === item.id;
  const samePodcastId = Math.floor(data.id / 100) === item.id;

  const changeActualEpisode = (episode) => () => {
    dispatch(resetIsPlaying());
    setTimeout(() => {
      dispatch(setActualEpisode(episode));
      dispatch(setIsPlaying(true));
    }, 100);
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
