import pdfjs from "pdfjs-dist";
import { useEffect, useRef } from "react";

import { StyledPdfPage, StyledTextLayer } from "./pdf-page.style";

import DropBox from "../drop-box/drop-box.component";

import { throttle } from "@/utils";

const PdfPage = ({ scale, asyncPage, dropId }) => {
  const canvasRef = useRef(null);
  const textLayerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const textLayer = textLayerRef.current;

    const renderPage = async () => {
      try {
        const page = await asyncPage;

        if (!page || !canvas) return;

        scale = 2;

        let viewport = page.getViewport({ scale });
        const context = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport,
        };

        page.render(renderContext);

        const { width } = canvas.getBoundingClientRect();
        const resize = (width / canvas.width) * scale;

        renderTextLayer(resize);
      } catch (error) {
        console.log(error);
      }
    };

    const renderTextLayer = async (resize) => {
      try {
        const page = await asyncPage;

        if (!page || !textLayer) return;

        const viewport = page.getViewport({ scale: resize });
        const textContent = await page.getTextContent();
        pdfjs.renderTextLayer({
          textContent,
          container: textLayer,
          viewport: viewport,
          textDivs: [],
        });
      } catch (error) {
        console.log(error);
      }
    };

    const resizeTextLayer = () => {
      if (!canvas || !textLayer) return;

      textLayer.innerHTML = "";

      const originalWidth = canvas.width;
      const { width: currentWidth } = canvas.getBoundingClientRect();

      const resize = (scale * currentWidth) / originalWidth;

      renderTextLayer(resize);
    };

    renderPage();

    const resizeObserver = new ResizeObserver(throttle(resizeTextLayer));
    resizeObserver.observe(textLayer);

    return () => {
      resizeObserver.unobserve(textLayer);
    };
  }, [asyncPage, scale]);

  return (
    <StyledPdfPage>
      <canvas ref={canvasRef} style={{ width: "100%" }} />
      <StyledTextLayer ref={textLayerRef}></StyledTextLayer>
      <DropBox id={dropId} canvasRef={canvasRef} />
    </StyledPdfPage>
  );
};

export default PdfPage;
