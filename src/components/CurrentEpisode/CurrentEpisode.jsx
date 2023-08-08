import { styled } from "styled-components";
import PropTypes from "prop-types";

import { useFetchPodcastsQuery } from "../../redux/features/podcastsApi";

const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 25%;
`;

const StyledContentName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  color: #808080;
  p {
    margin: 0;
    padding: 0;
  }
`;

const StyledNameTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-weight: 500;

  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

const StyledImage = styled.img`
  position: relative;
  width: 110px;
  height: 110px;

  @media (max-width: 1100px) {
    width: 70px;
    height: 70px;
  }
`;

const StyledFullName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

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
