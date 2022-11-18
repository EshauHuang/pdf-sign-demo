import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  padding-bottom: 1.7rem;
`;

export const StyledInput = styled.input`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 0.8rem 1.2rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: "Noto Sans TC";
  font-weight: 400;
  font-size: 1.4rem;
  width: 100%;
  min-height: 4rem;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.4rem;
  font-family: "Noto Sans TC";
  font-weight: 400;
  font-size: 1.2rem;
`;

export const ErrorMessage = styled.h6`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.colors.negative};
`;
