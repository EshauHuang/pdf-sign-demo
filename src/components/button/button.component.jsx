import styled from "styled-components";

import * as Styles from "./button.style";

export const ButtonBase = styled.button`
  ${Styles.buttonBase};
  ${(props) => Styles[props.size]};
  ${(props) => Styles[props.variant]};
  ${(props) => props.style}
`;

const Button = ({ size, variant, style, children, otherProps }) => (
  <ButtonBase size={size} variant={variant} style={style} {...otherProps}>
    {children}
  </ButtonBase>
);

export default Button;
