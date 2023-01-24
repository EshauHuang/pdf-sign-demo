import pdfjs from "pdfjs-dist";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Body,
  AddFileImg,
  SubCaptions,
  Captions,
  StyledButton,
  StyledLabel,
  Upload,
} from "./upload-file.style";

import { readFileAsync } from "@/utils/readFileAsync";

import { pdfUpload } from "@/store/pdf/action";

import addFile from "@/assets/illustration/add-file.png";

const UploadFile = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleUpload = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const data = await readFileAsync(file);
      const pdf = await pdfjs.getDocument(data).promise;

      if (!pdf) throw new Error("pdf was empty");

      dispatch(pdfUpload(pdf));
      navigateTo("/signature");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Body>
        <AddFileImg src={addFile} />
        <SubCaptions>將檔案拖曳至這裡，或</SubCaptions>
        <StyledLabel htmlFor="input-file">
          <StyledButton>選擇檔案</StyledButton>
          <Upload
            id="input-file"
            style={{ position: "absolute", zIndex: 10 }}
            onChange={handleUpload}
            type="file"
            accept="application/pdf"
          />
        </StyledLabel>
        <Captions>檔案大小10Mb以內，檔案格式為PDF、IMG</Captions>
      </Body>
    </Container>
  );
};

export default UploadFile;
