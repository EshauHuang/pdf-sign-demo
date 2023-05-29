import { useDispatch } from "react-redux";
import { useRef, useState } from "react";

import { dragStart, dragEnd } from "@/store/drag/action";
import { waitSignatureSave } from "@/store/docSignatures/action";

import SignatureItem from "@/components/signature-item/signature-item.component";

import { StyleDragItem } from "./drag-item.style";

const DragItem = ({ id, item }) => {
  const dispatch = useDispatch();
  const dragItemRef = useRef(null);
  const [isDraggable, setIsDraggable] = useState(false);

  const handleDragStart = (e) => {
    const dragItem = dragItemRef.current;

    if (!dragItem) return;

    const { x, y, width, height } = dragItem.getBoundingClientRect();
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
    setIsDraggable(false);
  };

  return (
    <StyleDragItem
      draggable={isDraggable}
      id={id}
      onMouseDown={(e) => {
        let target = e.target.closest(".handle");

        if (target) {
          setIsDraggable(true);
        }
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      ref={dragItemRef}
    >
      <SignatureItem item={item} />
    </StyleDragItem>
  );
};

export default DragItem;
