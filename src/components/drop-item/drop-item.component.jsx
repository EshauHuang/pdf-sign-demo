import styled from "styled-components";
import { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";

import {
  editSignaturePosition,
  addSignatureContentEl,
} from "@/store/docSignatures/action";
import { selectDocSignatures } from "@/store/docSignatures/selector";

import SignatureItem from "@/components/signature-item/signature-item.component";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.selectedPrimary};
  pointer-events: none;
`;

const DropItem = ({ item, dropItemId }) => {
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const contentRef = useRef(null);
  const { x, y, ...dragItem } = item;
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
      handle=".handle"
      nodeRef={nodeRef}
      onStop={(e, data) => {
        const { lastX, lastY } = data;

        dispatch(
          editSignaturePosition(docSignatures, dropItemId, lastX, lastY)
        );
      }}
    >
      <div
        id={dropItemId}
        ref={nodeRef}
        style={{
          display: "inline-block",
          position: "absolute",
          maxWidth: "280px",
          minWidth: "280px",
        }}
      >
        <SignatureItem item={dragItem} />
      </div>
    </Draggable>
  );
};

export default DropItem;
