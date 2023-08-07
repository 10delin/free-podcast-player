import { styled } from "styled-components";
import PropTypes from "prop-types";

import { PlayItemButton } from "../PlayButtons/PlayButtons";

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
  ${[30, 30, 10, 5]
    .map((width, index) => `&:nth-child(${index + 2}) { width: ${width}%; }`)
    .join("")}
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

const StyledItem = styled.p`
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

  ${[30, 30, 10, 5]
    .map((width, index) => `&:nth-child(${index + 2}) { width: ${width}%; }`)
    .join("")}
`;

export const PodcastItem = ({ item, sameId, isPlaying, handleImageLoad }) => {
  return (
    <>
      <PlayItemButton sameId={sameId} isPlaying={isPlaying} />
      <StyledContentName>
        <img src={item.imageUrl} alt={item.title} onLoad={handleImageLoad} />
        <div>
          <StyledNameTitle $isPlaying={isPlaying} $sameId={sameId}>
            {item.title}
          </StyledNameTitle>
          <p>{item.author}</p>
        </div>
      </StyledContentName>
      <StyledItem>{item.description}</StyledItem>
      <StyledItem>{item.releaseDate}</StyledItem>
    </>
  );
};

PodcastItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }),
  sameId: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handleImageLoad: PropTypes.func.isRequired,
};
