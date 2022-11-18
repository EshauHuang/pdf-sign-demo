import { Link } from "react-router-dom";

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
} from "./rename.style";

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
          <Title>重新命名檔案</Title>
        </TitleWrap>
      </TitleList>
      <Body>
        <InputField label="檔案" placeholder="請輸入檔案名稱" />
        <ButtonWrap>
          <StyledButton size="large" variant="primary" disabled>
            儲存
          </StyledButton>
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
