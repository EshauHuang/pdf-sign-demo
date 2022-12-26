import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { drop } from "@/store/drag/action";
import { createNewDocSignature } from "@/store/docSignatures/action";
import { selectCurrentDrag } from "@/store/drag/selector";
import { selectDocSignatures } from "@/store/docSignatures/selector";

import DropItem from "@/components/drop-item/drop-item.component";

import { StyledDropBox } from "./drop-box.style";

export default function DropBox({ id, canvasRef }) {
  const dispatch = useDispatch();
  const currentDrag = useSelector(selectCurrentDrag);
  const docSignatures = useSelector((state) => selectDocSignatures(state));
  const currentDocSignatures = docSignatures.find(
    (signature) => signature.id === id
  );

  const handleDropElement = (e) => {
    const { id: dropTo } = e.target;
    const { clientX, clientY } = e;
    const { x, y, width, height } = e.target.getBoundingClientRect();
    const {
      mouseOffsetX,
      mouseOffsetY,
      width: itemWidth,
      height: itemHeight,
    } = currentDrag;
    const minX = 0,
      minY = 0,
      maxX = width - itemWidth,
      maxY = height - itemHeight;

    const relativeX = clientX - mouseOffsetX - x;
    const relativeY = clientY - mouseOffsetY - y;

    const dragItemX =
      relativeX < minX ? 0 : relativeX > maxX ? maxX : relativeX;
    const dragItemY =
      relativeY < minY ? 0 : relativeY > maxY ? maxY : relativeY;

    dispatch(drop(dragItemX, dragItemY, dropTo));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!id) return;
    dispatch(createNewDocSignature({ id, canvas }));
  }, [dispatch, id]);

  return (
    <StyledDropBox
      id={id}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => handleDropElement(e)}
    >
      {currentDocSignatures &&
        currentDocSignatures.items.map((item, index) => (
          <DropItem
            key={index}
            item={item}
            dropItemId={`${id}/item-${index + 1}`}
          />
        ))}
    </StyledDropBox>
  );
}
