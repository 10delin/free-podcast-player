import { useState } from "react";
import PODCASTS from "../../data/mockPodcasts.json";
import { PodcastSearchBar } from "../../components/PodcastSearchBar/PodcastSearchBar";
import { PodcastOrderBy } from "../../components/PodcastOrderBy/PodcastOrderBy";
import { useNavigate } from "react-router";

export const Home = () => {
  const originalPodcasts = PODCASTS.podcasts;
  const [filteredPodcasts, setFilteredPodcasts] = useState(originalPodcasts);
  const navigate = useNavigate();

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
          <div key={podcast.id}>
            <li>
              <img src={podcast.imageUrl} alt={podcast.title} />
            </li>
            <li> {podcast.title}</li>
            <li>{podcast.description}</li>
            <li>{podcast.releaseDate}</li>
            <li>{podcast.duration}</li>
            <button onClick={() => navigate(`/podcast/${podcast.id}`)}>
              Go to podcast
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
