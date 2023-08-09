import PropTypes from "prop-types";

import {
  StyledWrapper,
  StyledContentName,
  StyledNameTitle,
  StyleItem,
  StyledWrapperSpinner,
} from "../../styles/StyledEpisodeItem";

import { PlayItemButton } from "../PlayButtons/PlayButtons";
import { Spinner } from "../Spinner/Spinner";

export const EpisodeItem = ({
  item,
  sameId,
  isPlaying,
  handleImageLoad,
  isLoaded,
}) => {
  return (
    <>
      <StyledWrapperSpinner $isLoaded={isLoaded}>
        <Spinner />
      </StyledWrapperSpinner>
      <StyledWrapper $isLoaded={isLoaded}>
        <PlayItemButton sameId={sameId} isPlaying={isPlaying} />
        <StyledContentName>
          <img src={item.imageUrl} alt={item.title} onLoad={handleImageLoad} />
          <StyledNameTitle $isPlaying={isPlaying} $sameId={sameId}>
            {item.title}
          </StyledNameTitle>
        </StyledContentName>
        <StyleItem>{item.description}</StyleItem>
        <StyleItem>{item.releaseDate}</StyleItem>
        <StyleItem>{item.duration}</StyleItem>
      </StyledWrapper>
    </>
  );
};

EpisodeItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
  sameId: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handleImageLoad: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};
