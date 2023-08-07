import styled from "styled-components";
import PropTypes from "prop-types";

import { PlayItemButton } from "../PlayButtons/PlayButtons";
import { Spinner } from "../Spinner/Spinner";

const StyledWrapperSpinner = styled.div`
  display: ${({ $isLoaded }) => ($isLoaded ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;
const StyledWrapper = styled.div`
  display: ${({ $isLoaded }) => ($isLoaded ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  ${[30, 30, 10, 5]
    .map((width, index) => `&:nth-child(${index + 2}) { width: ${width}%; }`)
    .join("")}
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
