import { useSelector, useDispatch } from "react-redux";
import { dragStart, dragEnd } from "@/store/drag/action";
import { selectSignatures } from "@/store/signatures/selector";
import { waitSignatureSave } from "@/store/docSignatures/action";

import { StyledDragBox, DragItem } from "./drag-box.style";

function DragBox({ id }) {
  const dispatch = useDispatch();
  const signatures = useSelector((state) => selectSignatures(state, id));

  return (
    <StyledDragBox id={id}>
      {id &&
        signatures.items.map((item, index) => (
          <DragItem
            draggable
            id={`${id}/item-${index}`}
            key={index}
            onDragStart={(e) => {
              const { id } = e.target;
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
            }}
            onDragEnd={(e) => {
              e.target.style.opacity = 1;

              dispatch(dragEnd());
            }}
          >
            {item.title}
          </DragItem>
        ))}
    </StyledDragBox>
  );
}

export default DragBox;
