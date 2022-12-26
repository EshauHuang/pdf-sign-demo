import styled from "styled-components";

export const StyledTextLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0.2;
  line-height: 1;

  & > span {
    color: transparent;
    position: absolute;
    white-space: pre;
    cursor: text;
    transform-origin: 0% 0%;
  }
`;

export const StyledPdfPage = styled.div`
  position: relative;
  margin: 10px 0;
  min-width: max-content;

  canvas {
    // width: 100%;
  }
`;
