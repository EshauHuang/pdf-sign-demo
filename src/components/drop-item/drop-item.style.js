import styled from "styled-components";

export const StyledDropItem = styled.div`
  position: absolute;
  width: 100px;
  padding: 5px 0;
  justify-content: center;
  background-color: orange;
  color: black;
  z-index: 1;
  text-align: center;
  cursor: move;
`;

export const DropItemContent = styled.div`
  display: inline-block;
`;
