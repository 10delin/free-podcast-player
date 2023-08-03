import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import PODCASTS from "../../data/mockPodcasts.json";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { PodcastEpisodes } from "../../components/PodcastEpisodes/PodcastEpisodes";

export const Podcast = () => {
  const originalPodcasts = PODCASTS.podcasts;
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  const id = parseInt(useParams().id);
  const Navigate = useNavigate();

  const podcast = [...originalPodcasts].find((podcast) => podcast?.id === id);

  useEffect(() => {
    setFilteredEpisodes(podcast?.episodes);
  }, [podcast]);

  return (
    <div>
      <button onClick={() => Navigate(`/`)} data-cy="go-to-home">
        Go to home
      </button>
      <SearchBar
        originalPodcasts={podcast.episodes}
        setFilteredContent={setFilteredEpisodes}
      />

      <OrderBy
        originalPodcasts={podcast.episodes}
        setFilteredContent={setFilteredEpisodes}
      />
      <h1>{podcast?.title}</h1>
      {[...filteredEpisodes]?.map((episode) => (
        <PodcastEpisodes key={episode.id} episode={episode} />
      ))}
    </div>
  );
};
