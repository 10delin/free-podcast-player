import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFetchPodcastsQuery } from "../../redux/features/podcastsApi";
import { setIsPlaying } from "../../redux/reducers/actualEpisodeSlice";
import { EmptyPodcast } from "../../components/EmptyPodcast/EmptyPodcast";
import { PodcastContent } from "../../components/PodcastContent/PodcastContent";

export const Podcast = () => {
  const { data: podcasts, isLoading: loading } = useFetchPodcastsQuery();
  const actualEpisode = useSelector((state) => state.actualEpisode);
  const dispatch = useDispatch();
  const { id } = useParams();
  const Navigate = useNavigate();
  const podcast = podcasts?.find((podcast) => podcast?.id === parseInt(id));

  const playEpisode = () => {
    dispatch(setIsPlaying(!actualEpisode.isPlaying));
  };

  if (!podcast) return <EmptyPodcast Navigate={Navigate} />;

  return (
    !loading && (
      <PodcastContent
        podcast={podcast}
        actualEpisode={actualEpisode}
        playEpisode={playEpisode}
        Navigate={Navigate}
      />
    )
  );
};
