import { useEffect, useState } from "react";
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

const initialFileName = {
  fileName: ""
}

const RenamePopupBox = () => {
  const [fileName, setFileName] = useState(initialFileName);
  const hasValue = Object.values(fileName).some((value) => value);
  
  useEffect(() => {
    return () => {
      setFileName(initialFileName);
    };
  }, []);

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
        <InputField
          name="fileName"
          label="檔案"
          placeholder="請輸入檔案名稱"
          inputValue={fileName}
          setInputValue={setFileName}
        />
        <ButtonWrap>
          <StyledButton size="large" variant="primary" disabled={!hasValue}>
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
      <RenamePopupBox />
    </PopupMask>
  );
};

export default RenamePopup;
