import PropTypes from "prop-types";

import {
  StyledContentName,
  StyledNameTitle,
  StyledItem,
} from "../../styles/StyledPodcastItem";

import { PlayItemButton } from "../PlayButtons/PlayButtons";

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
