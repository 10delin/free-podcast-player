import { useState } from "react";
import { useSelector } from "react-redux";

import PODCASTS from "../../data/mockPodcasts.json";
import { TITLES_BAR_PODCAST } from "../../utils/model";
import styled from "styled-components";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { TableContent } from "../../components/TableContent/TableContent";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  width: 100%;
  ${({ $actualEpisode }) => ($actualEpisode ? "margin-bottom: 110px;" : "")}
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 75%;
  gap: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Home = () => {
  const originalPodcasts = PODCASTS.podcasts;
  const [filteredPodcasts, setFilteredPodcasts] = useState(originalPodcasts);
  const actualEpisode = useSelector((state) => state.actualEpisode);

  return (
    <StyledWrapper $actualEpisode={actualEpisode}>
      <StyledContent>
        <SearchBar
          originalPodcasts={originalPodcasts}
          setFilteredContent={setFilteredPodcasts}
        />
        <OrderBy
          originalPodcasts={originalPodcasts}
          setFilteredContent={setFilteredPodcasts}
        />
        <TableContent content={filteredPodcasts} titles={TITLES_BAR_PODCAST} />
      </StyledContent>
    </StyledWrapper>
  );
};
