import { Link } from "react-router-dom";

import AddSign from "@/components/add-sign/add-sign.component";
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
} from "./add-sign.style";

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
          <Title>輸入</Title>
        </TitleWrap>
        <TitleWrap>
          <Title>手寫</Title>
        </TitleWrap>
        <TitleWrap>
          <Title>上傳</Title>
        </TitleWrap>
      </TitleList>
      <Body>
        <AddSign />
        <ButtonWrap>
          <StyledButton size="large" variant="primary" disabled>
            儲存
          </StyledButton>
        </ButtonWrap>
      </Body>
    </Container>
  );
};

const AddSignPopup = () => {
  return (
    <PopupMask>
      <PopupBox />
    </PopupMask>
  );
};

export default AddSignPopup;
