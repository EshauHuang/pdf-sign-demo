import { Container, Label, StyledInput } from "./input-field.style";

export const Input = ({placeholder}) => <StyledInput placeholder={placeholder} />

const InputField = ({ label, placeholder, className }) => {
  return (
    <Container className={`${className ? className: ""}`}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
    </Container>
  );
};

export default InputField;
