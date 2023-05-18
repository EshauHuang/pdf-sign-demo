import { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";

import {
  editSignaturePosition,
  addSignatureContentEl,
} from "@/store/docSignatures/action";
import { selectDocSignatures } from "@/store/docSignatures/selector";

import SignatureItem from "@/components/signature-item/signature-item.component";

const DropItem = ({ item, dropItemId }) => {
  const dispatch = useDispatch();
  const contentRef = useRef(null);
  const { x, y, ...person } = item;
  const docSignatures = useSelector((state) => selectDocSignatures(state));
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    dispatch(addSignatureContentEl(docSignatures, dropItemId, content));
  }, []);
  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      bounds="parent"
      onStop={(e, data) => {
        console.log("onStop");
        const { lastX, lastY, node } = data;
        const posX = lastX + Number(node.style.left.replace("px", ""));
        const posY = lastY + Number(node.style.top.replace("px", ""));
        console.log({ lastX, lastY });
        dispatch(editSignaturePosition(docSignatures, dropItemId, posX, posY));
      }}
    >
      <div
        id={dropItemId}
        style={{
          display: "inline-block",
          position: "absolute",
          top: y,
          left: x,
        }}
      >
        <SignatureItem person={person} />
      </div>
    </Draggable>
  );
};

export default DropItem;
