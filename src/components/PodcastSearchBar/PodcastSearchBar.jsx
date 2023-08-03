import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const PodcastSearchBar = ({ originalPodcasts, setFilteredPodcasts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  const OnSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const OnSearchPodcast = (e) => {
    e.preventDefault();

    const onFilteredPodcasts = [...originalPodcasts].filter((podcast) =>
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (onFilteredPodcasts.length === 0) {
      alert("No se encontró el libro");
      setSearchTerm("");
      setFilteredPodcasts(originalPodcasts);
      return;
    }

    setFilteredPodcasts(onFilteredPodcasts);
  };

  const removeFilter = (e) => {
    e.preventDefault();
    setSearchTerm("");
    setFilteredPodcasts(originalPodcasts);
  };

  return (
    <form onSubmit={OnSearchPodcast}>
      <input
        type="text"
        placeholder={t("searchBar.placeHolder")}
        value={searchTerm}
        onChange={OnSearchTermChange}
      />
      {searchTerm ? (
        <input
          type="button"
          onClick={removeFilter}
          value="❌"
          data-cy="button-reset-filter"
        />
      ) : null}
    </form>
  );
};

PodcastSearchBar.propTypes = {
  originalPodcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  setFilteredPodcasts: PropTypes.func.isRequired,
};
