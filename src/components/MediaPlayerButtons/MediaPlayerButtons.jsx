import { styled } from "styled-components";
import { PlayMediaButton } from "../PlayButtons/PlayButtons";

const StyledWrapper = styled.div`
  height: 110px;
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const StyledButtons = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CustomBoxIcon = styled.div`
  width: ${({ name }) =>
    name === "shuffle" || name === "repeat" ? "30px" : "40px"};
  height: ${({ name }) =>
    name === "shuffle" || name === "repeat" ? "30px" : "40px"};
  fill: white;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #4a52c0;
  }

  box-icon {
    width: 100%;
    height: 100%;
  }
`;

export const MediaPlayerButtons = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledButtons>
          <CustomBoxIcon name="shuffle">
            <box-icon name="shuffle" />
          </CustomBoxIcon>
          <CustomBoxIcon name="skip-previous">
            <box-icon name="skip-previous" />
          </CustomBoxIcon>
          <PlayMediaButton />
          <CustomBoxIcon name="skip-next">
            <box-icon name="skip-next" />
          </CustomBoxIcon>
          <CustomBoxIcon name="repeat">
            <box-icon name="repeat" />
          </CustomBoxIcon>
        </StyledButtons>
      </StyledContent>
    </StyledWrapper>
  );
};
