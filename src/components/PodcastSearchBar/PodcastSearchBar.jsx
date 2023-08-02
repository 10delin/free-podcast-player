import { useState } from "react";
import PropTypes from "prop-types";

export const PodcastSearchBar = ({ originalPodcasts, setFilteredPodcasts }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
      <input type="text" value={searchTerm} onChange={OnSearchTermChange} />
      {searchTerm ? (
        <input type="button" onClick={removeFilter} value="❌" />
      ) : null}
      <button type="submit">Search</button>
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
