export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0.8rem;
  bottom: 0.8rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  & > div + div {
    margin-left: 2.4rem;
  }
`;
