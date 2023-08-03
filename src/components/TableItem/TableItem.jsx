import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import styled from "styled-components";

import { setActualEpisode } from "../../redux/reducers/actualEpisodeSlice";

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
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid #1b1c20;
  padding: 2px 0;
  cursor: pointer;

  &:hover {
    background-color: #383737;
  }
`;

const StyleItem = styled.p`
  width: 20%;
  padding: 10px;
  margin: 0;
  font-size: 13px;
  color: #808080;

  &:first-child {
    width: 5%;
  }

  &:nth-child(2) {
    width: 20%;
    color: #ffffff;
  }

  &:nth-child(3) {
    width: 40%;
  }

  &:nth-child(4) {
    width: 10%;
  }

  &:nth-child(5) {
    width: 5%;
  }
`;

export const TableItem = ({ item, isTitlesPodcast }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeActualEpisode = (episode) => () => {
    dispatch(setActualEpisode(episode));
  };
  const goToPodcast = () => {
    navigate(`/podcast/${item.id}`);
  };

  return (
    <StyledWrapper>
      <StylesWrapperPodcast
        key={item.id}
        onClick={isTitlesPodcast ? goToPodcast : changeActualEpisode(item)}
        data-cy={isTitlesPodcast ? "go-to-podcast" : "change-actual-podcast"}
      >
        {isTitlesPodcast ? (
          <>
            <StyleItem>{item.id}</StyleItem>
            <StyleItem>
              {/* <img
                src={item.imageUrl}
                alt={item.title}
                width={40}
                height={40}
              /> */}
              {item.title}
            </StyleItem>
            <StyleItem>{item.description}</StyleItem>
            <StyleItem>{item.releaseDate}</StyleItem>
          </>
        ) : (
          <>
            <StyleItem>{item.id}</StyleItem>
            <StyleItem>
              {/* <img
                src={item.imageUrl}
                alt={item.title}
                width={40}
                height={40}
              /> */}
              {item.title}
            </StyleItem>
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
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    // imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  isTitlesPodcast: PropTypes.bool.isRequired,
};
