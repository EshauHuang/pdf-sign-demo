import styled from "styled-components";
import { useSelector } from "react-redux";

import {
  selectCurrentSignatureBoxId,
  selectCurrentSignaturesBox,
} from "@/store/signatures/selector";

import DragItem from "@/components/drag-item/drag-item.component";

const Container = styled.div``;

const DragItemWrap = styled.div`
  margin: 0.8rem 0;
`;

const DragList = () => {
  const id = useSelector(selectCurrentSignatureBoxId);
  const signatures = useSelector(selectCurrentSignaturesBox);

  return (
    <Container>
      {signatures.items.map((person, index) => (
        <DragItemWrap key={person.id}>
          <DragItem id={`${id}/item-${index + 1}`} person={person} />
        </DragItemWrap>
      ))}
    </Container>
  );
};

export default DragList;
