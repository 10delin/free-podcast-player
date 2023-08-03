import { setActualEpisode } from "../../redux/reducers/actualEpisodeSlice";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

export const PodcastEpisodes = ({ episode }) => {
  const dispatch = useDispatch();
  const changeActualEpisode = (episode) => () => {
    dispatch(setActualEpisode(episode));
  };
  return (
    <div key={episode.id} data-cy="list-episodes">
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
      <p>{episode.releaseDate}</p>
      <p>{episode.duration}</p>
      <button
        onClick={changeActualEpisode(episode)}
        data-cy="change-actual-podcast"
      >
        Reproducir
      </button>
    </div>
  );
};

PodcastEpisodes.propTypes = {
  episode: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }),
};
