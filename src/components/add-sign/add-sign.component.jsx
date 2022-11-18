import { useRef, useEffect } from "react"
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

const PaintCanvas = styled.canvas`
  border: 1px solid ${({theme}) => theme.colors.uiGrey};
  width: 100%;
  height: 16rem;
  margin-top: 0.8rem;
`

const AddSign = () => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current

    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    
  }, [canvasRef])

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
      <PaintCanvas ref={canvasRef}/>
    </Container>
  );
};

export default AddSign;
