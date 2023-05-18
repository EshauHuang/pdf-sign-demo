import { useDispatch } from "react-redux";

import { dragStart, dragEnd } from "@/store/drag/action";
import { waitSignatureSave } from "@/store/docSignatures/action";

import SignatureItem from "@/components/signature-item/signature-item.component";

import { StyleDragItem } from "./drag-item.style";

const DragItem = ({ id, person }) => {
  const dispatch = useDispatch();

  const handleDragStart = (e) => {
    // const { id: u } = e.target;
    const { x, y, width, height } = e.target.getBoundingClientRect();
    const { clientX, clientY } = e;
    const [parentId, itemId] = id.split("/");
    const mouseOffsetX = clientX - x;
    const mouseOffsetY = clientY - y;
    e.target.style.opacity = 0.4;
    dispatch(waitSignatureSave());
    dispatch(
      dragStart({
        itemId,
        parentId,
        width,
        height,
        mouseOffsetX,
        mouseOffsetY,
      })
    );
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = 1;

    dispatch(dragEnd());
  };

  return (
    <StyleDragItem
      draggable
      id={id}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SignatureItem person={person} />
    </StyleDragItem>
  );
};

export default DragItem;
