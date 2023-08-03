import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const PodcastItem = ({ podcast }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div key={podcast.id}>
      {/* <p>
        <img src={podcast.imageUrl} alt={podcast.title} />
      </p> */}
      <p> {podcast.title}</p>
      <p>{podcast.description}</p>
      <p>{podcast.releaseDate}</p>
      <p>{podcast.duration}</p>
      <button
        onClick={() => navigate(`/podcast/${podcast.id}`)}
        data-cy="go-to-podcast"
      >
        {t("podcastItem.goToPodcast")}
      </button>
    </div>
  );
};

PodcastItem.propTypes = {
  podcast: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
};
