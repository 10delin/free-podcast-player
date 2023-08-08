import { useState } from "react";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

import {
  StyledWrapper,
  StyledButton,
  StyledSelect,
  StyledOption,
} from "../../styles/StyledOrderBy";

export const OrderBy = ({ originalPodcasts, setFilteredContent }) => {
  const [orderBy, setOrderBy] = useState("");

  const { t } = useTranslation();

  const onOrderByPodcast = (e) => {
    setOrderBy(e.target.value);

    const convertDurationToMinutes = (duration) => {
      const timeParts = duration.split(" ");
      let totalMinutes = 0;

      for (const part of timeParts) {
        if (part.includes("h")) {
          totalMinutes += parseInt(part) * 60;
        } else if (part.includes("m")) {
          totalMinutes += parseInt(part);
        }
      }

      return totalMinutes;
    };

    const onFilteredPodcasts = [...originalPodcasts].sort((a, b) => {
      const value = e.target.value;
      switch (value) {
        case "name":
          return a.title.localeCompare(b.title);
        case "duration":
          return (
            convertDurationToMinutes(a.duration) -
            convertDurationToMinutes(b.duration)
          );
        case "date":
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        default:
          return 0;
      }
    });

    setFilteredContent(onFilteredPodcasts);
  };

  return (
    <StyledWrapper>
      <StyledButton>
        <box-icon name="search" />
      </StyledButton>
      <StyledSelect
        value={orderBy}
        onChange={onOrderByPodcast}
        data-cy="order-by"
      >
        <StyledOption value="">{t("orderBy.title")}</StyledOption>
        <StyledOption value="name" data-cy="order-by-name">
          {t("orderBy.name")}
        </StyledOption>
        <StyledOption value="duration" data-cy="order-by-duration">
          {t("orderBy.duration")}
        </StyledOption>
        <StyledOption value="date" data-cy="order-by-date">
          {t("orderBy.released")}
        </StyledOption>
      </StyledSelect>
    </StyledWrapper>
  );
};

OrderBy.propTypes = {
  originalPodcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  setFilteredContent: PropTypes.func.isRequired,
};
