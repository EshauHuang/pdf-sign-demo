import styled from "styled-components";

import Button from "@/components/button/button.component";

const Container = styled.div``;

const StyledButton = styled(Button)`
  min-height: 3.2rem;
`;

const StyledButtonChen = styled(Button)`
  font-family: "Chenyuluoyan-Monospaced";
  font-weight: 400;
  min-height: 3.2rem;
`;

const FontStyleItem = styled.li`
  ${StyledButton} {
    border-color: ${({ isTarget, theme }) =>
      isTarget ? theme.colors.primary : theme.colors.darkGrey};
    background-color: ${({ isTarget, theme }) =>
      isTarget ? theme.colors.selectedPrimary : "white"};
  }

  ${StyledButtonChen} {
    border-color: ${({ isTarget, theme }) =>
      isTarget ? theme.colors.primary : theme.colors.darkGrey};
    background-color: ${({ isTarget, theme }) =>
      isTarget ? theme.colors.selectedPrimary : "white"};
  }
`;

const FontStyleList = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 0.6rem 0;
`;

const FontList = ({ fontIndex, handleChangeFontIndex }) => {
  return (
    <Container>
      <FontStyleList>
        <FontStyleItem
          isTarget={fontIndex === "0"}
          onClick={() => handleChangeFontIndex("0")}
        >
          <StyledButton size="small" variant="secondary">
            思源黑體
          </StyledButton>
        </FontStyleItem>
        <FontStyleItem
          isTarget={fontIndex === "1"}
          onClick={() => handleChangeFontIndex("1")}
        >
          <StyledButton fStyle="Noto Serif TC" size="small" variant="secondary">
            思源宋體
          </StyledButton>
        </FontStyleItem>
        <FontStyleItem
          isTarget={fontIndex === "2"}
          onClick={() => handleChangeFontIndex("2")}
        >
          <StyledButtonChen size="small" variant="secondary">
            辰於落燕體
          </StyledButtonChen>
        </FontStyleItem>
      </FontStyleList>
    </Container>
  );
};

export default FontList;
