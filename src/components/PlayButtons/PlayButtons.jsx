import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../../redux/reducers/actualEpisodeSlice";
import PropTypes from "prop-types";

import {
  StyledMediaButton,
  StyledItemButtton,
} from "../../styles/StyledPlayButtons";

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
