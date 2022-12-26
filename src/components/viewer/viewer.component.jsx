import DragBox from "@/components/drag-box/drag-box.component";
import PdfViewer from "@/components/pdf-viewer/pdf-viewer.component";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addSignatureToDoc } from "@/store/docSignatures/action";
import { selectIsDropping, selectCurrentDrag } from "@/store/drag/selector";
import {
  selectDocSignatures,
  selectIsSaved,
} from "@/store/docSignatures/selector";
import { selectSignatures } from "@/store/signatures/selector";

import { Container } from "./viewer.style";

function Viewer() {
  const dispatch = useDispatch();
  const currentDrag = useSelector(selectCurrentDrag);
  const signaturesArray = useSelector(selectSignatures);
  const docSignaturesArray = useSelector(selectDocSignatures);
  const isDropping = useSelector(selectIsDropping);
  const isSaved = useSelector(selectIsSaved);

  useEffect(() => {
    if (isSaved || !isDropping || !signaturesArray || !docSignaturesArray)
      return;

    const { itemId, parentId, x, y, dropTo } = currentDrag;
    const [, itemIndex] = itemId.split("-");
    const signatures = signaturesArray.find(
      (signature) => signature.id === parentId
    );
    const { isSign, signCount, ...newItem } = signatures.items[itemIndex];

    dispatch(
      addSignatureToDoc(docSignaturesArray, dropTo, {
        ...newItem,
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
      <DragBox id="box-1" />
      <PdfViewer />
    </Container>
  );
}

export default Viewer;
