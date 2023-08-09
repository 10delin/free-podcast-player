import { useState } from "react";

import { StyledWrapper } from "../../styles/StyledMediaAleatoryButton";

export const MediaAleatoryButton = () => {
  const [isAleatory, setIsAleatory] = useState(false);

  const handleAleatory = () => {
    setIsAleatory(!isAleatory);
  };
  return (
    <StyledWrapper
      name="shuffle"
      $isAleatory={isAleatory}
      onClick={handleAleatory}
    >
      <box-icon name="shuffle" />
      <span />
    </StyledWrapper>
  );
};
