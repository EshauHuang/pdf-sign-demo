import { Container } from "./document-show.style";
import styled from "styled-components";

import PdfViewer from "@/components/pdf-viewer/pdf-viewer.component";

import fakeInvoice from "@/assets/FakeInvoice01.png";

const DocumentContainer = styled.div`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.colors.lightGrey};
  /* padding: 2.4rem 4.8rem; */
`;

const Image = styled.img`
  /* width: 100%; */
`;

export const Canvas = styled.canvas`
  width: 100%;
  height: 2000px;
  background-color: red;
`;

const DocumentShow = () => {
  return (
    <Container>
      <DocumentContainer>
        {/* <Canvas /> */}
        {/* <Image src={fakeInvoice} /> */}
        <PdfViewer />
      </DocumentContainer>
    </Container>
  );
};

export default DocumentShow;
