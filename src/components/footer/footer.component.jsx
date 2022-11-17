import styled from "styled-components";

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  padding: 1.6rem 7.2rem;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const LanguageList = styled.li`
  display: flex;
  align-items: center;

  li + li {
    margin-left: 1.6rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Body>
        <div>
          <p>@ 2022 The F2E 4th</p>
        </div>
        <LanguageList>
          <li>
            <h5>繁中</h5>
          </li>
          <li>
            <p>English</p>
          </li>
        </LanguageList>
      </Body>
    </Container>
  );
};

export default Footer;
