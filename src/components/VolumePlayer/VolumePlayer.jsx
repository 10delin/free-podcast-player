import { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  margin-right: 15px;
  width: 10%;
`;
const StyledVolumeBar = styled.input`
  width: 100px;
  height: 5px;
  background-color: #5e5e5e;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ffffff;
  }
`;

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
