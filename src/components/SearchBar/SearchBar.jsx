import { useState } from "react";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

export const SearchBar = ({ originalPodcasts, setFilteredContent }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  const OnSearchPodcast = (e) => {
    e.preventDefault();

    const onFilteredPodcasts = [...originalPodcasts].filter((podcast) =>
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (onFilteredPodcasts.length === 0) {
      alert(t("searchBar.notFound"));
      setSearchTerm("");
      setFilteredContent(originalPodcasts);
      return;
    }

    setFilteredContent(onFilteredPodcasts);
  };

  const removeFilter = (e) => {
    e.preventDefault();
    setSearchTerm("");
    setFilteredContent(originalPodcasts);
  };

  return (
    <form onSubmit={OnSearchPodcast}>
      <input
        type="text"
        placeholder={t("searchBar.placeHolder")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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

SearchBar.propTypes = {
  originalPodcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  setFilteredContent: PropTypes.func.isRequired,
};
