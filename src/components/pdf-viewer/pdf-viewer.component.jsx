import { useSelector } from "react-redux";

import { selectPdf, selectNumPages } from "@/store/pdf/selector";

import PdfPages from "@/components/pdf-pages/pdf-pages.component";

import { StyledPdfViewer } from "./pdf-viewer.style";

const PdfViewer = ({ scale = 1 }) => {
  const pdf = useSelector(selectPdf);
  const numPages = useSelector(selectNumPages);

  const handleGetPdfPage = (index) => pdf.getPage(index);

  return (
    <StyledPdfViewer>
      <PdfPages
        getPdfPage={handleGetPdfPage}
        pageCounts={numPages}
        scale={scale}
      />
    </StyledPdfViewer>
  );
};

export default PdfViewer;
