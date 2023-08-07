import { useSelector } from "react-redux";
import styled from "styled-components";

import { usePodcasts } from "../../hooks/usePodcasts";
import { MediaPlayerButtons } from "../MediaPlayerButtons/MediaPlayerButtons";
import { PlaybackBar } from "../PlaybackBar/PlaybackBar";
import { VolumePlayer } from "../VolumePlayer/VolumePlayer";
import { CurrentEpisode } from "../CurrentEpisode/CurrentEpisode";

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

export const MediaPlayerBar = () => {
  const { podcasts } = usePodcasts();
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
