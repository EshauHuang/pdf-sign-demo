import styled from "styled-components";

import InputField from "@/components/input-field/input-field.component";
import Button, { SvgButton } from "@/components/button/button.component";
import { ReactComponent as CloseIcon } from "@/assets/icon/close.svg";

const PopupMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.mask};
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 54.8rem;
  padding: 4rem 0 2.4rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.uiGrey};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const TitleList = styled.ul`
  display: flex;
  align-items: center;
`;

const TitleWrap = styled.li`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`;

const SvgButtonPos = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Body = styled.div`
  width: 100%;
  padding: 1.6rem 2.4rem 0;
`;

const ButtonWrap = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const buttonStyle = {
  width: "10.2rem",
  height: "3.8rem",
};

const PopupBox = () => {
  return (
    <Container>
      <SvgButtonPos>
        <SvgButton variant="secondary" component={<CloseIcon />} />
      </SvgButtonPos>
      <TitleList>
        <TitleWrap>
          <Title>重新命名檔案</Title>
        </TitleWrap>
      </TitleList>
      <Body>
        <InputField label="檔案" placeholder="請輸入檔案名稱" />
        <ButtonWrap>
          <Button style={buttonStyle} size="large" variant="primary" disabled>
            儲存
          </Button>
        </ButtonWrap>
      </Body>
    </Container>
  );
};

const RenamePopup = () => {
  return (
    <PopupMask>
      <PopupBox />
    </PopupMask>
  );
};

export default RenamePopup;
