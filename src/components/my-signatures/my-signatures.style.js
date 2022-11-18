import styled from "styled-components";
import { ReactComponent as AddIcon } from "@/assets/icon/add.svg";

export const buttonStyle = {
  width: "28rem",
};

export const Title = styled.h5`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 0.8rem;
`;

export const StyleAddIcon = styled(AddIcon)`
  width: 2.4rem;
  height: 2.4rem;

  path {
    fill: ${({ theme }) => theme.colors.darkGrey};
  }

  svg {
    width: 100%;
  }
`;
