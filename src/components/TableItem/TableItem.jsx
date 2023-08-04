import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import styled from "styled-components";

import { setActualEpisode } from "../../redux/reducers/actualEpisodeSlice";
import { useEffect, useState } from "react";

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

const StyledContentName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #808080;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
      margin: 0;
      padding: 0;
    }
  }

  &:first-child {
    width: 5%;
  }

  &:nth-child(2) {
    width: 30%;
  }

  &:nth-child(3) {
    width: 30%;
  }

  &:nth-child(4) {
    width: 10%;
  }

  &:nth-child(5) {
    width: 5%;
  }
`;

const StyleItem = styled.p`
  width: 20%;
  margin: 0;
  padding: 30px 0px;
  font-size: 13px;
  color: #808080;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-child {
    width: 5%;
  }

  &:nth-child(2) {
    width: 30%;
  }

  &:nth-child(3) {
    width: 30%;
  }

  &:nth-child(4) {
    width: 10%;
  }

  &:nth-child(5) {
    width: 5%;
  }
`;

const StyledNameTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-weight: 500;
`;

export const TableItem = ({ item, isTitlesPodcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingPodcast, setIsPlayingPodcast] = useState(false);

  const actualEpisode = useSelector((state) => state.actualEpisode);
  const actualPodcastId = Math.floor(actualEpisode.id / 100);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeActualEpisode = (episode) => () => {
    dispatch(setActualEpisode(episode));
  };
  const goToPodcast = () => {
    navigate(`/podcast/${item.id}`);
  };

  useEffect(() => {
    setIsPlaying(actualEpisode.id === item.id);
    setIsPlayingPodcast(actualPodcastId === item.id);
  }, [actualEpisode, item.id, actualPodcastId]);

  return (
    <StyledWrapper>
      <StylesWrapperPodcast
        key={item.id}
        onClick={isTitlesPodcast ? goToPodcast : changeActualEpisode(item)}
        data-cy={isTitlesPodcast ? "go-to-podcast" : "change-actual-podcast"}
      >
        {isTitlesPodcast ? (
          <>
            <StyleItem>{isPlayingPodcast ? "⏸" : "⏯"}</StyleItem>
            <StyledContentName>
              <img src={item.imageUrl} alt={item.title} />
              <div>
                <StyledNameTitle>{item.title}</StyledNameTitle>
                <p>{item.author}</p>
              </div>
            </StyledContentName>
            <StyleItem>{item.description}</StyleItem>
            <StyleItem>{item.releaseDate}</StyleItem>
          </>
        ) : (
          <>
            <StyleItem>{isPlaying ? "⏸" : "⏯"}</StyleItem>
            <StyledContentName>
              <img src={item.imageUrl} alt={item.title} />
              <div>
                <StyledNameTitle>{item.title}</StyledNameTitle>
                <p>{item.author}</p>
              </div>
            </StyledContentName>
            <StyleItem>{item.description}</StyleItem>
            <StyleItem>{item.releaseDate}</StyleItem>
            <StyleItem>{item.duration}</StyleItem>
          </>
        )}
      </StylesWrapperPodcast>
    </StyledWrapper>
  );
};

TableItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  isTitlesPodcast: PropTypes.bool.isRequired,
};
