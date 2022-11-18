import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  padding-right: 0.6rem;

  & > * + * {
    margin-top: 0.8rem;
  }
`;

export const Title = styled.label`
  color: ${({ theme }) => theme.colors.darkGrey};
`;
