import { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";

import {
  editSignaturePosition,
  addSignatureContentEl,
} from "@/store/docSignatures/action";
import { selectDocSignatures } from "@/store/docSignatures/selector";

import { StyledDropItem, DropItemContent } from "./drop-item.style";

const DropItem = (props) => {
  const dispatch = useDispatch();
  const contentRef = useRef(null);
  const { item, dropItemId } = props;
  const docSignatures = useSelector((state) => selectDocSignatures(state));

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    // console.log(docSignatures, dropItemId, content);
    dispatch(addSignatureContentEl(docSignatures, dropItemId, content));
  }, []);
  return (
    <Draggable
      defaultPosition={{ x: item.x, y: item.y }}
      bounds="parent"
      onStop={(e, data) => {
        const { lastX, lastY } = data;

        editSignaturePosition(docSignatures, dropItemId, lastX, lastY);
      }}
    >
      <StyledDropItem id={dropItemId}>
        <DropItemContent ref={contentRef}>{item.title}</DropItemContent>
      </StyledDropItem>
    </Draggable>
  );
};

export default DropItem;
