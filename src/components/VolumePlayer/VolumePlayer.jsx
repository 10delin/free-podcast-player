import { useState } from "react";

import {
  StyledWrapper,
  StyledVolumeBar,
} from "../../styles/StyledVolumePlayer";

export const VolumePlayer = () => {
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <StyledWrapper>
      <box-icon
        name={isMuted ? "volume-mute" : "volume-full"}
        color="#ffffff"
        onClick={handleMute}
        style={{ cursor: "pointer" }}
      />
      <StyledVolumeBar
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </StyledWrapper>
  );
};
