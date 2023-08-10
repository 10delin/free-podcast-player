import { MediaPlayerButtons } from "../MediaPlayerButtons/MediaPlayerButtons";
import { useSelector } from "react-redux";

import { StyledWrapper } from "../../styles/StyledMediaPlayerBar";
import { getLocalStorageItem } from "../../utils/localStorageData";

import { PlaybackBar } from "../PlaybackBar/PlaybackBar";
import { VolumePlayer } from "../VolumePlayer/VolumePlayer";
import { CurrentEpisode } from "../CurrentEpisode/CurrentEpisode";
import { useFetchPodcastsQuery } from "../../redux/features/podcastsApi";

export const MediaPlayerBar = () => {
  const { data: podcasts } = useFetchPodcastsQuery();
  const { data, isPlaying } = useSelector((state) => state.actualEpisode);

  const storedPodcasts = getLocalStorageItem("podcastsData");
  const storedActualEpisode = getLocalStorageItem("actualEpisode");

  const actualEpisode = storedActualEpisode || data;

  return actualEpisode ? (
    <StyledWrapper data-cy="media-player-bar">
      <CurrentEpisode data={actualEpisode} />
      <MediaPlayerButtons podcast={storedPodcasts || podcasts} />
      <PlaybackBar currentTrack={actualEpisode} isPlaying={isPlaying} />
      <VolumePlayer />
    </StyledWrapper>
  ) : null;
};
