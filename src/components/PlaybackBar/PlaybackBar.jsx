import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsPlaying } from "../../redux/reducers/actualEpisodeSlice";

import PropTypes from "prop-types";
import { styled } from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 50%;
`;

const StyledProgressBar = styled.progress`
  border-radius: 3px;
  height: 5px;
  appearance: none;
  background-color: #5e5e5e;
  width: 100%;

  &::-webkit-progress-bar {
    background-color: #5e5e5e;
    border-radius: 50%;
  }

  &::-webkit-progress-value {
    background-color: #ffffff;
  }
`;

export const PlaybackBar = ({ currentTrack, isPlaying }) => {
  const [progress, setProgress] = useState(0);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const handleSeekMouseDown = () => {
    dispatch(setIsPlaying(false));
  };

  const handleSeekMouseUp = () => {
    dispatch(setIsPlaying(true));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemain = Math.floor(seconds % 60);
    return `${minutes}:${secondsRemain.toString().padStart(2, "0")}`;
  };

  const convertToSeconds = (timeString) => {
    const timeValue = parseInt(timeString.slice(0, -1));
    return timeValue * 60;
  };

  const timeInSeconds = convertToSeconds(currentTrack.duration);

  useEffect(() => {
    let interval;
    const sumTime = timeInSeconds / 100;
    setProgress(0);
    setCounter(0);
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + sumTime;

          if (newProgress >= timeInSeconds) {
            dispatch(setIsPlaying(!isPlaying));
          }
          return newProgress;
        });
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return (
    <StyledWrapper>
      <span>{formatTime(counter)}</span>
      <StyledProgressBar
        max={timeInSeconds}
        value={progress}
        onMouseDown={handleSeekMouseDown}
        onMouseUp={handleSeekMouseUp}
      ></StyledProgressBar>
      <span>{formatTime(convertToSeconds(currentTrack.duration))}</span>
    </StyledWrapper>
  );
};

PlaybackBar.propTypes = {
  currentTrack: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }),
  isPlaying: PropTypes.bool.isRequired,
};
