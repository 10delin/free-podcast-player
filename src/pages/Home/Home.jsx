import { useState } from "react";
import PODCASTS from "../../data/mockPodcasts.json";
import { PodcastSearchBar } from "../../components/PodcastSearchBar/PodcastSearchBar";
import { PodcastOrderBy } from "../../components/PodcastOrderBy/PodcastOrderBy";

export const Home = () => {
  const originalPodcasts = PODCASTS.podcasts;
  const [filteredPodcasts, setFilteredPodcasts] = useState(originalPodcasts);

  return (
    <div>
      <PodcastSearchBar
        originalPodcasts={originalPodcasts}
        setFilteredPodcasts={setFilteredPodcasts}
      />

      <PodcastOrderBy
        originalPodcasts={originalPodcasts}
        setFilteredPodcasts={setFilteredPodcasts}
      />
      <ul>
        {[...filteredPodcasts].map((podcast) => (
          <li key={podcast.id}>{podcast.title}</li>
        ))}
      </ul>
    </div>
  );
};
