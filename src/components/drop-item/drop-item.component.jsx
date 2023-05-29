import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";

import {
  editSignaturePosition,
  addSignatureContentEl,
  removeSignatureFromDocSignature,
} from "@/store/docSignatures/action";
import { selectDocSignatures } from "@/store/docSignatures/selector";

import { ReactComponent as DeleteIcon } from "@/assets/icon/Delete.svg";
import { SvgButton } from "@/components/button/button.component";
import SignatureItem from "@/components/signature-item/signature-item.component";

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  path {
    fill: ${({ theme }) => theme.colors.dark};
  }
`;

const DropItemActionListWrap = styled.div`
  position: absolute;
  top: calc(100% - 1.6rem);
  right: 0;
  height: ${({ doesShowActionList }) => (doesShowActionList ? "100%" : "0")};
  overflow: hidden;
  transition: height 0.4s ease;
`;

const DropItemActionList = styled.div`
  width: 20rem;
  border-radius: 0.8rem;
  border: 1px solid #e6e9ef;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  background-color: white;
  padding: 1.6rem;
`;

const DeleteButton = styled.div`
  padding: 0.8rem 1.6rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0.4rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  p {
    margin-left: 0.8rem;
    font-size: 1.4rem;
    font-family: "Noto Sans TC";
    color: ${({ theme }) => theme.colors.dark};
  }
`;

const DeleteButtonBody = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.selectedPrimary};
  pointer-events: none;
`;

const DropItem = ({ item, dropItemId }) => {
  const [doesShowActionList, setDoesShowActionList] = useState(false);
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

  const handleClickMoreVertButton = () => {
    setDoesShowActionList((prev) => !prev);
  };

  const handleRemoveSignature = (id) => {
    dispatch(removeSignatureFromDocSignature(docSignatures, id));
  };

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
        <SignatureItem
          item={dragItem}
          handleClickMoreVertButton={handleClickMoreVertButton}
        />

        <DropItemActionListWrap doesShowActionList={doesShowActionList}>
          <DropItemActionList>
            <DeleteButton onClick={() => handleRemoveSignature(dropItemId)}>
              <DeleteButtonBody>
                <SvgButton
                  className="handle"
                  size="small"
                  variant="secondary"
                  component={<StyledDeleteIcon />}
                />
                <p>刪除</p>
              </DeleteButtonBody>
            </DeleteButton>
          </DropItemActionList>
        </DropItemActionListWrap>
      </div>
    </Draggable>
  );
};

export default DropItem;
