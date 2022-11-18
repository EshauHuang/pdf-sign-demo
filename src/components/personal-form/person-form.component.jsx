import { useEffect, useState } from "react"

import { Container, Title } from "./person-form.style";

import { Input } from "@/components/input-field/input-field.component";

const initialGuestDetail = {
  username: "",
  email: "",
};

const PersonalForm = () => {
  const [guestDetail, setGuestDetail] = useState(initialGuestDetail);

  useEffect(() => {
    return () => {
      setGuestDetail(initialGuestDetail)
    }
  }, [])
  
  return (
    <Container>
      <Title>基本資料</Title>
      <Input
        name="username"
        placeholder="請輸入您的姓名"
        inputValue={guestDetail}
        setInputValue={setGuestDetail}
      />
      <Input
        name="email"
        placeholder="請輸入您的電子信箱"
        inputValue={guestDetail}
        setInputValue={setGuestDetail}
      />
    </Container>
  );
};

export default PersonalForm;
