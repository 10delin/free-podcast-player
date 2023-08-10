import { useState } from "react";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

import {
  StyledWrapper,
  StyledButton,
  StyledInput,
  StyledRemoveButton,
} from "../../styles/StyledSearchBar";

export const SearchBar = ({ originalPodcasts, setFilteredContent }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  const applyFilter = (inputValue) => {
    const onFilteredPodcasts = originalPodcasts.filter((podcast) =>
      podcast.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredContent(onFilteredPodcasts);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    if (inputValue === "") {
      setFilteredContent(originalPodcasts);
    } else {
      applyFilter(inputValue);
    }
  };

  const removeFilter = () => {
    setSearchTerm("");
    setFilteredContent(originalPodcasts);
  };

  return (
    <StyledWrapper>
      <StyledButton>
        <box-icon name="search" />
      </StyledButton>
      <StyledInput
        type="text"
        placeholder={t("searchBar.placeHolder")}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm ? (
        <StyledRemoveButton
          type="button"
          onClick={removeFilter}
          value="❌"
          data-cy="button-reset-filter"
        />
      ) : null}
    </StyledWrapper>
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
