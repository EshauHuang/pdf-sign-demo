import { Container, Title } from "./person-form.style";

import { Input } from "@/components/input-field/input-field.component";

const PersonalForm = () => {
  return (
    <Container>
      <Title>基本資料</Title>
      <Input placeholder="請輸入您的姓名" />
      <Input placeholder="請輸入您的電子信箱" />
    </Container>
  );
};

export default PersonalForm;
