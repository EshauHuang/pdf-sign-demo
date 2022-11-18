import styled from "styled-components";

export const CircleWrap = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Circle = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({ theme }) => theme.colors.uiGrey};
`;

export const StyledToggleBar = styled.div`
  position: relative;
  display: inline-block;
  width: 3.2rem;
  height: 1.6rem;
  padding: 0.4rem;
  display: inline-flex;
  align-items: center;
  transition: 0.3s;
  border: 1px solid ${({ theme }) => theme.colors.uiGrey};
  border-radius: 99px;
  cursor: pointer;
  background-color: ${({ toggle, theme }) =>
    toggle ? "white" : theme.colors.lightGrey};

  ${CircleWrap} {
    transition: 0.3s;

    ${({ toggle }) =>
      toggle &&
      `
    transform: translateX(100%);
  `};
  }

  ${Circle} {
    transition: 0.3s;

    ${({ toggle, theme }) =>
      toggle &&
      `
    background-color: ${theme.colors.primary};
  `};
  }
`;

export const ToggleText = styled.h6``;

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.8rem;

  ${ToggleText} {
    color: ${({ theme, toggle }) =>
      toggle ? theme.colors.darkGrey : theme.colors.grey};
  }
`;
