import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { TITLES_BAR_PODCAST } from "../../utils/model";
import styled from "styled-components";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { TableContent } from "../../components/TableContent/TableContent";
import { usePodcasts } from "../../hooks/usePodcasts";

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
  const { podcasts, loading } = usePodcasts();
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const actualEpisode = useSelector((state) => state.actualEpisode);

  useEffect(() => {
    setFilteredPodcasts(podcasts);
  }, [podcasts]);

  return (
    !loading && (
      <StyledWrapper $actualEpisode={actualEpisode}>
        <StyledContent>
          <SearchBar
            originalPodcasts={podcasts}
            setFilteredContent={setFilteredPodcasts}
          />
          <OrderBy
            originalPodcasts={podcasts}
            setFilteredContent={setFilteredPodcasts}
          />
          <TableContent
            content={filteredPodcasts}
            titles={TITLES_BAR_PODCAST}
          />
        </StyledContent>
      </StyledWrapper>
    )
  );
};
