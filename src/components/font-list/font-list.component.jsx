import styled from "styled-components";

import Button from "@/components/button/button.component";

const Container = styled.div``;

const FontStyleItem = styled.li``;

const StyledButton = styled(Button)``;

const StyledButtonChen = styled(Button)`
  font-family: "Chenyuluoyan-Monospaced";
  font-weight: 400;
`;

const FontStyleList = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const FontList = () => {
  return (
    <Container>
      <FontStyleList>
        <FontStyleItem>
          <StyledButton size="small" variant="secondary">
            思源黑體
          </StyledButton>
        </FontStyleItem>
        <FontStyleItem>
          <StyledButton fStyle="Noto Serif TC" size="small" variant="secondary">
            思源宋體
          </StyledButton>
        </FontStyleItem>
        <FontStyleItem>
          <StyledButtonChen size="small" variant="secondary">
            辰於落燕體
          </StyledButtonChen>
        </FontStyleItem>
      </FontStyleList>
    </Container>
  );
};

export default FontList;
