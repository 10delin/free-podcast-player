import PropTypes from "prop-types";
import { useFetchPodcastsQuery } from "../../redux/features/podcastsApi";

import {
  StyledContent,
  StyledImage,
  StyledContentName,
  StyledFullName,
  StyledNameTitle,
} from "../../styles/StyledCurrentEpisode";

export const CurrentEpisode = ({ data }) => {
  const { data: podcasts } = useFetchPodcastsQuery();
  const podcastId = Math.floor(data.id / 100);

  const getAuthor = () => {
    const author = podcasts?.find((podcast) => podcast.id === podcastId);
    return author?.author;
  };
  return (
    <StyledContent>
      <StyledImage src={data?.imageUrl} alt={data?.title} />
      <StyledContentName>
        <StyledFullName>
          <StyledNameTitle>{data.title}</StyledNameTitle>
          <p>{getAuthor()}</p>
        </StyledFullName>
      </StyledContentName>
    </StyledContent>
  );
};

CurrentEpisode.propTypes = {
  data: PropTypes.object.isRequired,
};
