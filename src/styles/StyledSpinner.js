import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const StyledClipLoader = styled(ClipLoader)`
  border-color: rgb(255 255 255) rgb(255 255 255) transparent !important;
`;
