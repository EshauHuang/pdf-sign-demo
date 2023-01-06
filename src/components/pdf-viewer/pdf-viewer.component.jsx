import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";

import { selectPdf, selectNumPages } from "@/store/pdf/selector";
import { selectDocSignatures } from "@/store/docSignatures/selector";

import PdfPages from "@/components/pdf-pages/pdf-pages.component";

import { StyledPdfViewer } from "./pdf-viewer.style";

const PdfViewer = ({ scale = 2 }) => {
  const docSignatures = useSelector(selectDocSignatures);
  const pdf = useSelector(selectPdf);
  const numPages = useSelector(selectNumPages);

  const handleGetPdfPage = (index) => pdf.getPage(index);

  const handleDownloadPdf = () => {
    let doc;
    docSignatures.forEach((props, i) => {
      const { canvas, items: signatures } = props;
      const { x: canvasX, y: canvasY, width } = canvas.getBoundingClientRect();

      if (i === 0) {
        doc =
          canvas.width > canvas.height
            ? new jsPDF("l", "px", [canvas.width, canvas.height])
            : new jsPDF("p", "px", [canvas.height, canvas.width]);
      } else {
        if (canvas.width > canvas.height) {
          doc.addPage([canvas.width, canvas.height], "l");
        } else {
          doc.addPage([canvas.height, canvas.width, "p"]);
        }
      }

      const image = canvas.toDataURL("image/png");

      doc.addImage(
        image,
        "PNG",
        0,
        0,
        canvas.width,
        canvas.height,
        `page-${i + 1}`,
        "SLOW"
      );

      if (signatures.length) {
        signatures.forEach((signature) => {
          const { title, contentEl } = signature;
          const { x, y, height } = contentEl.getBoundingClientRect();

          const originX = (x - canvasX) / (width / canvas.width);
          const originY = (y - canvasY + height) / (width / canvas.width);
          doc.setFontSize(24);
          doc.text(title, originX, originY);
        });
      }

      if (i === 13) {
        doc.save("test.pdf");
      }
    });
  };

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
