import PropTypes from "prop-types";

import {
  StyledWrapper,
  StyledTitles,
  StyledTitleItem,
} from "../../styles/StyledTableContent";

import { TableItem } from "../TableItem/TableItem";

export const TableContent = ({ content, titles }) => {
  const isTitlesPodcast = titles.length === 4;
  return (
    <StyledWrapper data-cy="table-content">
      <StyledTitles>
        {[...titles]?.map((title) => (
          <StyledTitleItem key={title} $isTitlesPodcast={isTitlesPodcast}>
            {title === "Duration" ? <box-icon name="time" /> : title}
          </StyledTitleItem>
        ))}
      </StyledTitles>
      {[...content]?.map((item) => (
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
