import { useState } from "react";

import { StyledWrapper } from "../../styles/StyledMediaRepeatButton";

export const MediaRepeatButton = () => {
  const [isRepeat, setIsRepeat] = useState(false);

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };
  return (
    <StyledWrapper name="repeat" $isRepeat={isRepeat} onClick={handleRepeat}>
      <box-icon name="repeat" />
      <span />
    </StyledWrapper>
  );
};
