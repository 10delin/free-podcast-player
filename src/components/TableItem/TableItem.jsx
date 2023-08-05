import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import styled from "styled-components";

import {
  setActualEpisode,
  setIsPlaying,
} from "../../redux/reducers/actualEpisodeSlice";
import { Spinner } from "../Spinner/Spinner";
import { useState } from "react";

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

  ${({ $isPlaying, $sameId }) =>
    $isPlaying && $sameId
      ? `
    color: #23a338;
  `
      : null}
`;

const StyledButton = styled.div`
  position: relative;

  box-icon {
    width: 30px;
    height: 30px;
    fill: white;
    border-radius: 50%;
    background-color: ${({ $isPlaying, $sameId }) =>
      $isPlaying && $sameId ? "#4a52c0" : "transparent"};
    cursor: pointer;

    &:hover {
      background-color: #4a52c0;
    }
  }
`;

const JAJAStyled = styled.div`
  display: ${({ $isLoaded }) => ($isLoaded ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
      <StyledWrapper>
        <StylesWrapperPodcast
          key={item.id}
          onClick={isTitlesPodcast ? goToPodcast : changeActualEpisode(item)}
          data-cy={isTitlesPodcast ? "go-to-podcast" : "change-actual-podcast"}
        >
          {isTitlesPodcast ? (
            <>
              <StyledButton $isPlaying={isPlaying} $sameId={samePodcastId}>
                {isPlaying && samePodcastId ? (
                  <box-icon name="pause" />
                ) : (
                  <box-icon name="play" />
                )}
              </StyledButton>
              <StyledContentName>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  onLoad={handleImageLoad}
                />
                <div>
                  <StyledNameTitle
                    $isPlaying={isPlaying}
                    $sameId={samePodcastId}
                  >
                    {item.title}
                  </StyledNameTitle>
                  <p>{item.author}</p>
                </div>
              </StyledContentName>
              <StyleItem>{item.description}</StyleItem>
              <StyleItem>{item.releaseDate}</StyleItem>
            </>
          ) : (
            <>
              <div
                style={{
                  display: isLoaded ? "none" : "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "80px",
                }}
              >
                <Spinner />
              </div>
              <JAJAStyled $isLoaded={isLoaded}>
                <StyledButton $isPlaying={isPlaying} $sameId={sameId}>
                  {isPlaying && sameId ? (
                    <box-icon name="pause" />
                  ) : (
                    <box-icon name="play" />
                  )}
                </StyledButton>
                <StyledContentName>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    onLoad={handleImageLoad}
                  />
                  <div>
                    <StyledNameTitle $isPlaying={isPlaying} $sameId={sameId}>
                      {item.title}
                    </StyledNameTitle>
                    <p>{item.author}</p>
                  </div>
                </StyledContentName>
                <StyleItem>{item.description}</StyleItem>
                <StyleItem>{item.releaseDate}</StyleItem>
                <StyleItem>{item.duration}</StyleItem>
              </JAJAStyled>
            </>
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
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  isTitlesPodcast: PropTypes.bool.isRequired,
};
