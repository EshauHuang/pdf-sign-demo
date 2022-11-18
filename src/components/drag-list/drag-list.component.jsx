import styled from "styled-components";

import DragItem from "@/components/drag-item/drag-item.component";
import signPhoto from "@/assets/sign-photo.png";

const invitedPeople = [
  {
    id: 1,
    name: "咖哩 飯",
    email: "123456@gmail.com",
    photo: signPhoto,
  },
  {
    id: 2,
    name: "咖哩 飯",
    email: "123456@gmail.com",
  },
  {
    id: 3,
    name: "咖哩 飯",
    email: "123456@gmail.com",
  },
  {
    id: 3,
    name: "咖哩 飯",
    email: "123456@gmail.com",
  },
  {
    id: 3,
    name: "咖哩 飯",
    email: "123456@gmail.com",
  },
  {
    id: 3,
    name: "咖哩 飯",
    email: "123456@gmail.com",
  },
  {
    id: 3,
    name: "咖哩 飯",
    email: "123456@gmail.com",
  },
  {
    id: 3,
    name: "咖哩 飯",
    email: "123456@gmail.com",
  },
];

const Container = styled.div``;

const DragList = () => {
  return (
    <Container>
      {invitedPeople.map((person) => (
        <DragItem key={person.id} {...person} />
      ))}
    </Container>
  );
};

export default DragList;
