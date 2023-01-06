import styled from "styled-components";

import Button from "@/components/button/button.component";

export const StyledLabel = styled.label`
  width: 100%;
  margin: 0.8rem 0 1.6rem;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.selectedPrimary};
  border: 2px dashed ${({ theme }) => theme.colors.primary};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 41.6rem;
  padding: 8rem 0 10rem;
`;

export const AddFileImg = styled.img`
  margin-bottom: 2.4rem;
`;

export const SubCaptions = styled.p`
  font-size: 1.4rem;
`;

export const Captions = styled.h5`
  color: ${({ theme }) => theme.colors.hoverPrimary};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const Upload = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
`;
