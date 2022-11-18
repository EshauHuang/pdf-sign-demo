import styled from "styled-components";

import { ReactComponent as Check } from "@/assets/icon/check.svg";

const StyledCheck = styled(Check)`
  width: 2rem;

  path {
    fill: white;
  }
`;

const StepIconInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ type, theme }) =>
    type === "regular" ? "white" : theme.colors.primary};
  border: ${({ type, theme }) =>
    type === "regular" ? `2px solid ${theme.colors.grey}` : 0};
  border-radius: 50%;
`;

const StepIconLabel = styled.h4`
  line-height: 24px;
  color: ${({ type, theme }) =>
    type === "regular" ? theme.colors.darkGrey : "white"};
`;

export const StyledStepIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  padding: 2px;
  border-radius: 50%;
  border: 2px solid
    ${({ type, theme }) =>
      type === "regular" ? "transparent" : theme.colors.selectedPrimary};

  ${({
    theme,
    outSideColor,
    fColor,
    insideColor,
    outSideBgColor,
    innerBgColor,
  }) => `
    ${
      outSideBgColor
        ? theme.colors[outSideBgColor]
          ? `background-color: ${theme.colors[outSideBgColor]};`
          : `background-color: ${outSideBgColor};`
        : ""
    }
    ${
      outSideColor
        ? theme.colors[outSideColor]
          ? `border: 2px solid ${theme.colors[outSideColor]};`
          : `border: 2px solid ${outSideColor};`
        : ""
    }
    ${StepIconInner} {
      ${
        insideColor
          ? theme.colors[insideColor]
            ? `border: 2px solid ${theme.colors[insideColor]};`
            : `border: 2px solid ${insideColor};`
          : ""
      }
    }
    ${StepIconLabel} {
      ${
        fColor
          ? theme.colors[fColor]
            ? `color: ${theme.colors[fColor]};`
            : `color: ${fColor};`
          : ""
      }
    }
  `}
`;

const StyledCheckIcon = styled(StyledStepIcon)`
  border: 2px solid transparent;
`;

export const StepIcon = ({ type, children, ...otherProps }) => {
  return (
    <StyledStepIcon {...otherProps} type={type}>
      <StepIconInner type={type}>
        <StepIconLabel type={type}>{children}</StepIconLabel>
      </StepIconInner>
    </StyledStepIcon>
  );
};

export const CheckIcon = () => {
  return (
    <StyledCheckIcon>
      <StepIconInner>
        <StyledCheck />
      </StepIconInner>
    </StyledCheckIcon>
  );
};
