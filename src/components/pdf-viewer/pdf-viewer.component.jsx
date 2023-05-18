import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";

import { selectPdf, selectNumPages } from "@/store/pdf/selector";
import { selectDocSignatures } from "@/store/docSignatures/selector";

import PdfPages from "@/components/pdf-pages/pdf-pages.component";

import { StyledPdfViewer } from "./pdf-viewer.style";

const PdfViewer = ({ scale = 1 }) => {
  const docSignatures = useSelector(selectDocSignatures);
  const pdf = useSelector(selectPdf);
  const numPages = useSelector(selectNumPages);

  const handleGetPdfPage = (index) => pdf.getPage(index);

  const handleDownloadPdf = () => {
    let doc;
    docSignatures.forEach((props, i) => {
      const { canvas, items: signatures } = props;
      const {
        x: canvasX,
        y: canvasY,
        width,
        height,
      } = canvas.getBoundingClientRect();

      let scale = 1;
      let max_width = 1080;

      if (canvas.width > max_width) {
        scale = max_width / canvas.width;
      }

      let scaledWidth = canvas.width * scale;
      let scaledHeight = canvas.height * scale;

      if (i === 0) {
        doc =
          scaledWidth > scaledHeight
            ? new jsPDF("l", "px", [scaledWidth, scaledHeight])
            : new jsPDF("p", "px", [scaledHeight, scaledWidth]);
      } else {
        if (scaledWidth > scaledHeight) {
          doc.addPage([scaledWidth, scaledHeight], "l");
        } else {
          doc.addPage([scaledHeight, scaledWidth, "p"]);
        }
      }
      // if (i === 0) {
      //   doc =
      //     canvas.width > canvas.height
      //       ? new jsPDF("l", "px", [canvas.width, canvas.height])
      //       : new jsPDF("p", "px", [canvas.height, canvas.width]);
      // } else {
      //   if (canvas.width > canvas.height) {
      //     doc.addPage([canvas.width, canvas.height], "l");
      //   } else {
      //     doc.addPage([canvas.height, canvas.width, "p"]);
      //   }
      // }

      const image = canvas.toDataURL("image/png");

      doc.addImage(
        image,
        "PNG",
        0,
        0,
        scaledWidth,
        scaledHeight,
        `page-${i + 1}`,
        "SLOW"
      );
      // doc.addImage(
      //   image,
      //   "PNG",
      //   0,
      //   0,
      //   canvas.width,
      //   canvas.height,
      //   `page-${i + 1}`,
      //   "SLOW"
      // );

      console.log({ signatures });

      if (signatures.length) {
        console.log({ signatures });
        signatures.forEach((signature) => {
          const { photo, x, y, width, height } = signature;

          if (photo) {
            doc.addImage(photo, "JPEG", x, y, width, height);
          }
        });
      }

      doc.save("test.pdf");
    });
  };

  return (
    <StyledPdfViewer>
      <button onClick={handleDownloadPdf}>DOWNLOAD</button>
      <PdfPages
        getPdfPage={handleGetPdfPage}
        pageCounts={numPages}
        scale={scale}
      />
    </StyledPdfViewer>
  );
};

export default PdfViewer;
