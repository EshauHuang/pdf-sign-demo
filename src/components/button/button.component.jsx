import styled from "styled-components";

import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

import * as S from "./button.style";

export const ButtonBase = styled.button`
  ${S.buttonBase};
  ${(props) => S[props.size]};
  ${(props) => S[props.variant]};
  font-family: ${({ fStyle }) => fStyle};
`;

export const SvgButtonBase = styled.button`
  ${S.svgButtonBase}
  ${(props) => S[props.size]};
  ${(props) => S[props.variant]};
  ${(props) => props.style};
  cursor: ${(props) => props.cursorType};
`;

export const SvgButton = ({
  component,
  className,
  type = "button",
  size,
  variant,
  style,
  cursorType,
}) => {
  const svgVariant = variant
    ? `svg${capitalizeFirstLetter(variant)}`
    : undefined;

  const svgSize = size ? `svg${capitalizeFirstLetter(size)}` : undefined;
  return (
    <SvgButtonBase
      className={`${className ? className : ""}`}
      type={type}
      size={svgSize}
      variant={svgVariant}
      style={style}
      cursorType={cursorType}
    >
      {component}
    </SvgButtonBase>
  );
};

const Button = ({
  children,
  type = "button",
  size,
  variant,
  fStyle,
  className,
  disabled,
  onClick
}) => {
  return (
    <ButtonBase
      className={`${className ? className : ""}`}
      type={type}
      fStyle={fStyle}
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
