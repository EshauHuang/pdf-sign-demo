import pdfjs from "pdfjs-dist";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";

import { readFileAsync } from "@/utils/readFileAsync";

import { selectDocSignatures } from "@/store/docSignatures/selector";

import PdfPages from "@/components/pdf-pages/pdf-pages.component";

import { StyledPdfViewer } from "./pdf-viewer.style";

const PdfViewer = () => {
  const pdfRef = useRef(null);
  const [pageCounts, setPageCounts] = useState(0);
  const docSignatures = useSelector(selectDocSignatures);
  const scale = 2;

  const handleUpload = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const data = await readFileAsync(file);
      const pdf = await pdfjs.getDocument(data).promise;

      if (!pdf) throw new Error("pdf was empty");

      const { numPages } = pdf._pdfInfo;

      pdfRef.current = pdf;
      setPageCounts(numPages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetPdfPage = (index) => pdfRef.current.getPage(index);

  const handleDownaloadPdf = () => {
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
      <div
        style={{
          backgroundColor: "white",
        }}
      >
        <input onChange={handleUpload} type="file" accept="application/pdf" />
        <br />
        <button onClick={handleDownaloadPdf}>DOWNLOAD</button>
      </div>
      <PdfPages
        getPdfPage={handleGetPdfPage}
        pageCounts={pageCounts}
        scale={scale}
      />
    </StyledPdfViewer>
  );
};

export default PdfViewer;
