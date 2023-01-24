import { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";

import {
  editSignaturePosition,
  addSignatureContentEl,
} from "@/store/docSignatures/action";
import { selectDocSignatures } from "@/store/docSignatures/selector";

import DragItem from "@/components/drag-item/drag-item.component";

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
      defaultPosition={{ x, y }}
      bounds="parent"
      // onStop={(data) => {
      //   const { lastX, lastY } = data;

      //   editSignaturePosition(docSignatures, dropItemId, lastX, lastY);
      // }}
    >
      <DragItem id={dropItemId} person={person} />
    </Draggable>
  );
};

export default DropItem;
