import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const PodcastOrderBy = ({ originalPodcasts, setFilteredPodcasts }) => {
  const [orderBy, setOrderBy] = useState("asc");

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

    setFilteredPodcasts(onFilteredPodcasts);
  };

  return (
    <div>
      <select value={orderBy} onChange={onOrderByPodcast}>
        <option value="">{t("orderBy.title")}</option>
        <option value="name">{t("orderBy.name")}</option>
        <option value="duration">{t("orderBy.duration")}</option>
        <option value="date">{t("orderBy.released")}</option>
      </select>
    </div>
  );
};

PodcastOrderBy.propTypes = {
  originalPodcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  setFilteredPodcasts: PropTypes.func.isRequired,
};
