import styled from "styled-components";
import Button from "@/components/button/button.component";

export const PopupMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.mask};
`;

export const Container = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 54.8rem;
  height: 40.6rem;
  padding: 4rem 0 2.4rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.uiGrey};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const TitleList = styled.ul`
  display: flex;
  align-items: center;
`;

export const TitleWrap = styled.li`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  cursor: ${({ isTarget }) => (isTarget ? "auto" : "pointer")};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ isTarget }) => (isTarget ? "100%" : "0")};
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.4s ease;
    transform-origin: center;
  }
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
  position: relative;
  width: 100%;
  padding: 1.6rem 2.4rem 0;
  flex-grow: 1;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  width: 10.2rem;
  height: 3.8rem;
`;
