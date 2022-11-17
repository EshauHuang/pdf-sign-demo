import Button from "@/components/button/button.component";
import {
  Container,
  Body,
  AddFileImg,
  SubCaptions,
  Captions,
  buttonStyle,
} from "./upload-file.style";

import addFile from "@/assets/illustration/add-file.png";

const UploadFile = () => {
  return (
    <Container>
      <Body>
        <AddFileImg src={addFile} />
        <SubCaptions>將檔案拖曳至這裡，或</SubCaptions>
        <Button style={buttonStyle}>選擇檔案</Button>
        <Captions>檔案大小10Mb以內，檔案格式為PDF、IMG</Captions>
      </Body>
    </Container>
  );
};

export default UploadFile;
