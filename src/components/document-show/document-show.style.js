import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const ControlBar = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0.8rem;
  position: absolute;
  bottom: 0;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  & > div + div {
    margin-left: 2.4rem;
  }
`;
