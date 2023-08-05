import PropTypes from "prop-types";
import styled from "styled-components";

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
  margin: 0;
  font-size: 13px;
  color: #808080;

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

  box-icon {
    fill: #808080;
    width: 20px;
    height: 20px;
  }
`;

export const TableContent = ({ content, titles }) => {
  const isTitlesPodcast = titles.length === 4;
  return (
    <StyledWrapper>
      <StyledTitles>
        {[...titles].map((title) => (
          <StyledTitleItem key={title} $isTitlesPodcast={isTitlesPodcast}>
            {title === "Duration" ? <box-icon name="time" /> : title}
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
  isTitlesPodcast: PropTypes.bool,
};
