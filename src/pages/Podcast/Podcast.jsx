import { useParams, useNavigate } from "react-router-dom";
import PODCASTS from "../../data/mockPodcasts.json";

export const Podcast = () => {
  const originalPodcasts = PODCASTS.podcasts;
  const id = parseInt(useParams().id);
  const Navigate = useNavigate();

  const podcast = originalPodcasts.find((podcast) => podcast.id === id);

  if (!podcast) {
    return <div>Podcast not found!</div>;
  }

  return (
    <div>
      <>
        <button onClick={() => Navigate(`/`)}>Go to home</button>
      </>
      <h1>{podcast?.title}</h1>
      {podcast?.episodes.map((episode) => (
        <div key={episode.id}>
          <h2>{episode.title}</h2>
          <p>{episode.description}</p>
          <p>{episode.releaseDate}</p>
          <p>{episode.duration}</p>
        </div>
      ))}
    </div>
  );
};
