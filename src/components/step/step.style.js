import styled from "styled-components";

export const StyledStep = styled.li`
  display: flex;
  align-items: center;

  & + & {
    margin-left: 1.6rem;
  }
`;

export const StepTitle = styled.p`
  margin-left: 0.8rem;
`;

export const StepLine = styled.div`
  width: 8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  margin-left: 1.6rem;
`;
