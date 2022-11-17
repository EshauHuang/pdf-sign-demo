import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 4rem 0 2.7rem;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2.7rem;
`;

export const StyledStepCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: calc((100% - 2.4rem) / 3);

  & + & {
    margin-left: 2.4rem;
  }
`;

export const StepIndex = styled.div`
  margin-bottom: 0.8rem;
`;

export const StepCardTitle = styled.h4`
  margin-bottom: 0.2rem;
`;

export const StepCardCaptions = styled.p`
  margin-bottom: 0.2rem;
`;

export const StepCardPhoto = styled.img`
  max-width: fit-content;
`;