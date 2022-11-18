import styled from "styled-components";
import Button from "@/components/button/button.component";
import InputField from "@/components/input-field/input-field.component";

export const PopupMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.mask};
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 54.8rem;
  padding: 4rem 0 2.4rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.uiGrey};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

export const TitleList = styled.ul`
  display: flex;
  align-items: center;
`;

export const TitleWrap = styled.li`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`;

export const SvgButtonPos = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Body = styled.div`
  width: 100%;
  padding: 1.6rem 2.4rem 0;
`;

export const ButtonWrap = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  width: 10.2rem;
  height: 3.8rem;
`;

export const NameField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3.2rem;
`;

export const StyledInputFiled = styled(InputField)`
  width: calc((100% - 0.8rem) / 2);
`;

