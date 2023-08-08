import { MediaPlayerButtons } from "../MediaPlayerButtons/MediaPlayerButtons";
import { useSelector } from "react-redux";

import { StyledWrapper } from "../../styles/StyledMediaPlayerBar";

import { PlaybackBar } from "../PlaybackBar/PlaybackBar";
import { VolumePlayer } from "../VolumePlayer/VolumePlayer";
import { CurrentEpisode } from "../CurrentEpisode/CurrentEpisode";
import { useFetchPodcastsQuery } from "../../redux/features/podcastsApi";

export const MediaPlayerBar = () => {
  const { data: podcasts } = useFetchPodcastsQuery();
  const { data, isPlaying } = useSelector((state) => state.actualEpisode);

  return data ? (
    <StyledWrapper data-cy="media-player-bar">
      <CurrentEpisode data={data} />
      <MediaPlayerButtons podcast={podcasts} />
      <PlaybackBar currentTrack={data} isPlaying={isPlaying} />
      <VolumePlayer />
    </StyledWrapper>
  ) : null;
};
