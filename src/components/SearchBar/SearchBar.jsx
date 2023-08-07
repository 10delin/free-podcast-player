import { useState } from "react";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0 70px 0;
  width: 100%;
  background-color: #1a1a1a;
  border: 2px solid transparent;
  border-radius: 25px;
`;

const StyledInput = styled.input`
  position: relative;
  border: none;
  background-color: #1a1a1a;
  color: #ffffff;
  border: 2px solid transparent;
  padding: 15px 10px;
  width: 100%;
  border-radius: 25px;
  outline: none;

  &::placeholder {
    content: "";
    position: flex;
    left: 0;
    padding-left: 20px;
  }

  &:focus {
    border: 2px solid #ffffff;
  }
`;

const StyledRemoveButton = styled.input`
  position: absolute;
  right: 30px;
  border: none;
  bottom: 2px;
  top: 0;
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #383737;
    border-radius: 30%;
  }

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  box-icon {
    width: 30px;
    height: 30px;
    fill: white;
    border-radius: 50%;
    z-index: 1;
  }
`;

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
    <StyledWrapper onSubmit={OnSearchPodcast}>
      <StyledButton>
        <box-icon name="search" />
      </StyledButton>
      <StyledInput
        type="text"
        placeholder={t("searchBar.placeHolder")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
