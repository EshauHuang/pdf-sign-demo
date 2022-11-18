import { Link } from "react-router-dom";
import styled from "styled-components";

import AddSign from "@/components/add-sign/add-sign.component";
import InputField from "@/components/input-field/input-field.component";
import { SvgButton } from "@/components/button/button.component";
import { ReactComponent as CloseIcon } from "@/assets/icon/close.svg";

import {
  Container,
  SvgButtonPos,
  TitleList,
  TitleWrap,
  Title,
  Body,
  ButtonWrap,
  PopupMask,
  StyledButton,
} from "./invite.style";

const InvitedPersonForm = styled.form`
  width: 100%;
`;

const NameField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3.2rem;
`;

const StyledInputFiled = styled(InputField)`
  width: calc((100% - 0.8rem) / 2);
`;

const PopupBox = () => {
  return (
    <Container>
      <SvgButtonPos>
        <Link to="/signature">
          <SvgButton variant="secondary" component={<CloseIcon />} />
        </Link>
      </SvgButtonPos>
      <TitleList>
        <TitleWrap>
          <Title>邀請簽署人</Title>
        </TitleWrap>
      </TitleList>
      <Body>
        <InputField label="簽署人信箱*" placeholder="請輸入電子郵件" />
        <NameField>
          <StyledInputFiled label="姓氏*" placeholder="請輸入簽署人的姓氏" />
          <StyledInputFiled label="名字" placeholder="請輸入簽署人的名字" />
        </NameField>
        <ButtonWrap>
          <StyledButton size="large" variant="primary" disabled>
            儲存
          </StyledButton>
        </ButtonWrap>
      </Body>
    </Container>
  );
};

const InvitePopup = () => {
  return (
    <PopupMask>
      <PopupBox />
    </PopupMask>
  );
};

export default InvitePopup;
