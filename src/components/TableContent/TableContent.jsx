import PropTypes from "prop-types";
import styled from "styled-components";

import EpisodeImage from "../../assets/images/episode-image.png";

import { TableItem } from "../TableItem/TableItem";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const StyledTitles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

const StyledTitleItem = styled.p`
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

const StyledEpisodeImage = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 30px;
`;

export const TableContent = ({ content, titles }) => {
  const isTitlesPodcast = titles.length === 4;
  return (
    <StyledWrapper>
      {!isTitlesPodcast ? (
        <StyledEpisodeImage src={EpisodeImage} alt="picture" />
      ) : null}
      <StyledTitles>
        {[...titles].map((title) => (
          <StyledTitleItem key={title} $isTitlesPodcast={isTitlesPodcast}>
            {title}
          </StyledTitleItem>
        ))}
      </StyledTitles>
      {[...content].map((item) => (
        <TableItem
          key={item.id}
          item={item}
          isTitlesPodcast={isTitlesPodcast}
        />
      ))}
    </StyledWrapper>
  );
};

TableContent.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
