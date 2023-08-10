import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { TITLES_BAR_PODCAST } from "../../utils/model";
import { useFetchPodcastsQuery } from "../../redux/features/podcastsApi";
import { StyledWrapper, StyledContent } from "../../styles/StyledHome";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/localStorageData";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { TableContent } from "../../components/TableContent/TableContent";

export const Home = () => {
  const { data: podcasts, isLoading: loading } = useFetchPodcastsQuery();
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const actualEpisode = useSelector((state) => state.actualEpisode);

  useEffect(() => {
    const localPodcasts = getLocalStorageItem("podcastsData");
    if (localPodcasts) {
      setFilteredPodcasts(localPodcasts);
    }
  }, []);

  useEffect(() => {
    if (podcasts) {
      setLocalStorageItem("podcastsData", podcasts);
      setFilteredPodcasts(podcasts);
    }
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
