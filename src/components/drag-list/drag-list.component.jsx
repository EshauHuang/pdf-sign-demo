import styled from "styled-components";
import { useSelector } from "react-redux";

import { selectSignatures } from "@/store/signatures/selector";

import DragItem from "@/components/drag-item/drag-item.component";

const Container = styled.div``;

const DragItemWrap = styled.div`
  margin: 0.8rem 0;
`;

const DragList = ({ id = "box-1" }) => {
  const signatures = useSelector((state) => selectSignatures(state, id));
  return (
    <Container>
      {signatures.items.map((person, index) => (
        <DragItemWrap>
          <DragItem
            id={`${id}/item-${index + 1}`}
            key={person.id}
            person={person}
          />
        </DragItemWrap>
      ))}
    </Container>
  );
};

export default DragList;
