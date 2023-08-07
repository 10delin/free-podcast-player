import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../../redux/reducers/actualEpisodeSlice";

import { styled } from "styled-components";
import PropTypes from "prop-types";

const StyledMediaButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  box-icon {
    width: 40px;
    height: 40px;
    fill: white;
    border-radius: 50%;
    background-color: ${({ $isPlaying }) =>
      $isPlaying ? "#4a52c0" : "transparent"};
    cursor: pointer;

    &:hover {
      background-color: #4a52c0;
    }
  }
`;

const StyledItemButtton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  box-icon {
    width: 40px;
    height: 40px;
    fill: white;
    border-radius: 50%;
    background-color: ${({ $isPlaying, $sameId }) =>
      $isPlaying && $sameId ? "#4a52c0" : "transparent"};
    cursor: pointer;

    &:hover {
      background-color: #4a52c0;
    }
  }
`;

export const PlayMediaButton = () => {
  const { isPlaying } = useSelector((state) => state.actualEpisode);
  const dispatch = useDispatch();

  const playEpisode = () => {
    dispatch(setIsPlaying(!isPlaying));
  };
  return (
    <StyledMediaButton $isPlaying={isPlaying} onClick={playEpisode}>
      {isPlaying ? <box-icon name="pause" /> : <box-icon name="play" />}
    </StyledMediaButton>
  );
};

export const PlayItemButton = ({ sameId, isPlaying }) => {
  return (
    <StyledItemButtton $isPlaying={isPlaying} $sameId={sameId}>
      {isPlaying && sameId ? (
        <box-icon name="pause" />
      ) : (
        <box-icon name="play" />
      )}
    </StyledItemButtton>
  );
};

PlayItemButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  sameId: PropTypes.bool.isRequired,
};
