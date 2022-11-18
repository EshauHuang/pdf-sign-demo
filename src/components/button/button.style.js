import styled, { css } from "styled-components";

export const svgPrimary = css`
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const svgSecondary = css`
  border: 1px solid transparent;
`;

export const svgLarge = css`
  width: 4.8rem;
  height: 4.8rem;
`;

export const svgMedium = css`
  width: 4rem;
  height: 4rem;
`;

export const svgSmall = css`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0;
`;

export const svgButtonBase = css`
  width: 4.8rem;
  height: 4.8rem;
  padding: 1.2rem;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    fill: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledSvgButton = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  padding: 1.2rem;
  background: #ffffff;
  border: 1px solid
    ${({ theme, type }) =>
      type === "normal" ? "transparent" : theme.colors.grey};
  border-radius: 4px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    fill: ${({ theme }) => theme.colors.darkGrey};
  }
`;

/* styles common to all buttons */
export const buttonBase = css`
  font-family: "Noto Sans TC";
  font-size: 1.6rem;
  font-weight: 700;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 2.4rem;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.primary};

  :hover {
    background-color: ${({ theme }) => theme.colors.hoverPrimary};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.uiGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

/* theme variants */
export const primary = css`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};

  :hover {
    background-color: ${({ theme }) => theme.colors.hoverPrimary};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.hoverPrimary};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.uiGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 400;
    opacity: 0.4;
  }
`;

export const secondary = css`
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grey};

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.selectedPrimary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.uiGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 400;
    opacity: .4;
  }
`;

export const tertiary = css`
  color: ${({ theme }) => theme.colors.primary};
  background-color: white;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

/* size variants */
export const small = css`
  padding: 0.5rem 0.8rem;
  font-size: 1.4rem;
  font-weight: 400;
`;

export const medium = css`
  padding: 0.8rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 400;
`;

export const large = css`
  padding: 1.2rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 700;
`;
