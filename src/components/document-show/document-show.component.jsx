import { Container } from "./document-show.style";
import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { addSignatureToDoc } from "@/store/docSignatures/action";
import { selectIsDropping, selectCurrentDrag } from "@/store/drag/selector";
import {
  selectDocSignatures,
  selectIsSaved,
} from "@/store/docSignatures/selector";
import { selectSignatures } from "@/store/signatures/selector";
import { selectPdfId } from "@/store/pdf/selector";

import PdfViewer from "@/components/pdf-viewer/pdf-viewer.component";

import fakeInvoice from "@/assets/FakeInvoice01.png";

const DocumentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const Canvas = styled.canvas`
  width: 100%;
  height: 2000px;
  background-color: red;
`;

const DocumentShow = () => {
  const dispatch = useDispatch();
  const currentDrag = useSelector(selectCurrentDrag);
  const signaturesArray = useSelector(selectSignatures);
  const docSignaturesArray = useSelector(selectDocSignatures);
  const isDropping = useSelector(selectIsDropping);
  const isSaved = useSelector(selectIsSaved);
  const pdfId = useSelector(selectPdfId);

  useEffect(() => {
    if (isSaved || !isDropping || !signaturesArray || !docSignaturesArray)
      return;

    const { itemId, parentId, x, y, width, height, dropTo } = currentDrag;
    if (parentId.search(pdfId) >= 0) return;

    const [, itemIndex] = itemId.split("-");
    const signatures = signaturesArray.find(
      (signature) => signature.id === parentId
    );

    const newItem = signatures.items.find(
      (item) => Number(itemIndex) === item.id
    );

    dispatch(
      addSignatureToDoc(docSignaturesArray, dropTo, {
        ...newItem,
        signatureId: `${dropTo}/${itemId}`,
        width,
        height,
        x,
        y,
      })
    );
  }, [
    dispatch,
    isSaved,
    isDropping,
    currentDrag,
    signaturesArray,
    docSignaturesArray,
  ]);
  return (
    <Container>
      <DocumentContainer>
        <PdfViewer />
      </DocumentContainer>
    </Container>
  );
};

export default DocumentShow;
