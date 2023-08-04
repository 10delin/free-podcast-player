import { useState } from "react";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  justify-self: end;
  margin-bottom: 50px;
`;

const StyledSelect = styled.select`
  position: relative;
  border: none;
  background-color: #1a1a1a;
  color: #ffffff;
  border: 2px solid transparent;
  padding: 12px 10px;
  width: 100%;
  border-radius: 25px;
  font-size: 13px;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 2px solid #ffffff;
  }
`;

const StyledOption = styled.option`
  background-color: #2a2a2a;
  color: #ffffff;
  border: 2px solid transparent;
  padding: 15px 10px;
  font-size: 13px;
  width: 100%;
  margin-right: 20px;
  border-radius: 25px;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 2px solid #ffffff;
  }

  &:checked {
    background-color: #414141;
  }
`;

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
