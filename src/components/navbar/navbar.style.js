import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 7.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LinkList = styled.div`
  display: flex;
`;

export const Link = styled.a`
  & + & {
    margin-left: 2.4rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.2rem;
`;

export const Logo = styled.img`
  max-width: fit-content;
`;
