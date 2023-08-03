import { useParams, useNavigate } from "react-router-dom";
import PODCASTS from "../../data/mockPodcasts.json";
import { useEffect, useState } from "react";
import { PodcastSearchBar } from "../../components/PodcastSearchBar/PodcastSearchBar";
import { PodcastOrderBy } from "../../components/PodcastOrderBy/PodcastOrderBy";
import { setActualPodcast } from "../../redux/reducers/actualPodcastSlice";
import { useDispatch } from "react-redux";

export const Podcast = () => {
  const originalPodcasts = PODCASTS.podcasts;
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  const dispatch = useDispatch();
  const id = parseInt(useParams().id);
  const Navigate = useNavigate();

  const podcast = [...originalPodcasts].find((podcast) => podcast?.id === id);

  const changeActualPodcast = (episode) => () => {
    dispatch(setActualPodcast(episode));
  };

  useEffect(() => {
    setFilteredEpisodes(podcast?.episodes);
  }, [podcast]);

  return (
    <div>
      <button onClick={() => Navigate(`/`)}>Go to home</button>
      <PodcastSearchBar
        originalPodcasts={podcast.episodes}
        setFilteredPodcasts={setFilteredEpisodes}
      />

      <PodcastOrderBy
        originalPodcasts={podcast.episodes}
        setFilteredPodcasts={setFilteredEpisodes}
      />
      <h1>{podcast?.title}</h1>
      {[...filteredEpisodes]?.map((episode) => (
        <div key={episode.id}>
          <h2>{episode.title}</h2>
          <p>{episode.description}</p>
          <p>{episode.releaseDate}</p>
          <p>{episode.duration}</p>
          <button onClick={changeActualPodcast(episode)}>Reproducir</button>
        </div>
      ))}
    </div>
  );
};
