import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

import Button from "@/components/button/button.component";

import { ReactComponent as BackIcon } from "@/assets/icon/back.svg";
import { ReactComponent as EditIcon } from "@/assets/icon/edit.svg";

const Container = styled.div`
  padding: 2.9rem 7.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Back = styled(BackIcon)`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  path {
    fill: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const FileName = styled.h5`
  margin-left: 1.6rem;
  margin-right: 0.8rem;
`;

const Edit = styled(EditIcon)`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;

  path {
    fill: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
`;

const RightPart = styled.div``;

const Menu = () => {
  const location = useLocation();
  return (
    <Container>
      <Body>
        <LeftPart>
          <Link to="/">
            <Back />
          </Link>
          <FileName>型號U-ew8951出貨單</FileName>
          <Link
            to={{
              pathname: "rename",
              state: { background: location },
            }}
          >
            <Edit />
          </Link>
        </LeftPart>
        <RightPart>
          <Button>註冊</Button>
        </RightPart>
      </Body>
    </Container>
  );
};

export default Menu;
