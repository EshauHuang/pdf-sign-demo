import { Container, Logo, Title, LinkList, Link } from "./navbar.style";

import logo from "@/assets/logo.png";
import Button from "@/components/button/button.component";

const Navbar = () => {
  return (
    <Container>
      <Logo src={logo} alt="快點簽" />
      <Title>快速省時的電子簽署工具</Title>
      <LinkList>
        <Link>
          <Button size="medium" variant="tertiary">
            註冊
          </Button>
        </Link>
        <Link>
          <Button size="medium" variant="primary">
            登入
          </Button>
        </Link>
      </LinkList>
    </Container>
  );
};

export default Navbar;
