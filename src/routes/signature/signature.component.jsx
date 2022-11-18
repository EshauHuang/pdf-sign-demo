import { useState } from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as PersonAddIcon } from "@/assets/icon/person-add.svg";

import Menu from "@/components/menu/menu.component";
import StepList from "@/components/step-list/step-list.component";
import PersonalForm from "@/components/personal-form/person-form.component";
import DocumentShow from "@/components/document-show/document-show.component";
import MySignatures from "@/components/my-signatures/my-signatures.component";
import DragList from "@/components/drag-list/drag-list.component";
import Button, { SvgButton } from "@/components/button/button.component";
import { ToggleBarSection } from "@/components/ui/toggle-bar/toggle-bar.component";

const Body = styled.div`
  display: flex;
  height: calc(100% - 18rem);
  padding: 0 7.2rem;
  gap: 2.4rem;
`;

const SignatureSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30.6rem;
  padding: 2.4rem 0;
  justify-content: space-between;
`;

const SignatureSettingTop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 4rem;
  padding-right: 1.6rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Title = styled.h5`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const SvgButtonPos = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const InvitedSignatures = () => {
  const [isOrder, setIsOrder] = useState(false);
  const [isDeadLine, setIsDateLine] = useState(false);

  return (
    <Container>
      <Title>邀請簽署人</Title>
      <Link to="invite">
        <SvgButtonPos>
          <SvgButton component={<PersonAddIcon />} />
        </SvgButtonPos>
      </Link>
      <ToggleBarSection
        toggle={isOrder}
        setToggle={setIsOrder}
        noActiveText="無簽署順序"
        activeText="排列簽署順序"
      />
      <ToggleBarSection
        toggle={isDeadLine}
        setToggle={setIsDateLine}
        noActiveText="無期限"
        activeText="指定簽署期限"
      />
      <DragList />
    </Container>
  );
};

const StyledButton = styled(Button)`
  width: 100%;
`;

const SignatureSetting = () => {
  return (
    <SignatureSettingContainer>
      <SignatureSettingTop>
        <PersonalForm />
        <MySignatures />
        <InvitedSignatures />
      </SignatureSettingTop>
      <StyledButton size="large" variant="primary" disabled>
        下一步
      </StyledButton>
    </SignatureSettingContainer>
  );
};

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Signature = () => {
  return (
    <SignatureContainer>
      <Menu />
      <StepList />
      <Body>
        <DocumentShow />
        <SignatureSetting />
      </Body>
      <Outlet />
    </SignatureContainer>
  );
};

export default Signature;
