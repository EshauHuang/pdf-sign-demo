import styled from "styled-components";

import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

import * as S from "./button.style";

export const ButtonBase = styled.button`
  ${S.buttonBase};
  ${(props) => S[props.size]};
  ${(props) => S[props.variant]};
  ${(props) => props.style}
`;

export const SvgButtonBase = styled.button`
  ${S.svgButtonBase}
  ${(props) => S[props.size]};
  ${(props) => S[props.variant]};
  ${(props) => props.style}
`;

export const SvgButton = ({ size, variant, style, component }) => {
  const svgVariant = variant
    ? `svg${capitalizeFirstLetter(variant)}`
    : undefined;

  const svgSize = size ? `svg${capitalizeFirstLetter(size)}` : undefined;
  return (
    <SvgButtonBase size={svgSize} variant={svgVariant} style={style}>
      {component}
    </SvgButtonBase>
  );
};

const Button = ({ size, variant, style, children, disabled }) => {
  return (
    <ButtonBase size={size} variant={variant} disabled={disabled} style={style}>
      {children}
    </ButtonBase>
  );
};

export default Button;
