import { useState } from "react";

import PODCASTS from "../../data/mockPodcasts.json";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { PodcastItem } from "../../components/PodcastItem/PodcastItem";

export const Home = () => {
  const originalPodcasts = PODCASTS.podcasts;
  const [filteredPodcasts, setFilteredPodcasts] = useState(originalPodcasts);

  return (
    <div>
      <SearchBar
        originalPodcasts={originalPodcasts}
        setFilteredContent={setFilteredPodcasts}
      />

      <OrderBy
        originalPodcasts={originalPodcasts}
        setFilteredContent={setFilteredPodcasts}
      />
      {[...filteredPodcasts].map((podcast) => (
        <PodcastItem key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
};
