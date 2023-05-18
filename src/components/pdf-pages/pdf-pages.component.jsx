import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import PdfPage from "@/components/pdf-page/pdf-page.component";

import { selectPdfId } from "@/store/pdf/selector";

const PdfPages = (props) => {
  const { getPdfPage, pageCounts, canvasRefs, scale } = props;
  const [pages, setPages] = useState([]);
  const pdfId = useSelector(selectPdfId);

  useEffect(() => {
    if (!pageCounts) return;

    const pageCountsArray = Array.from({ length: pageCounts }, (_, i) => i + 1);
    const pages = pageCountsArray.map((i) => getPdfPage(i));

    setPages(pages);
  }, [getPdfPage, pageCounts]);

  return (
    <>
      {pages.map((page, index) => (
        <PdfPage
          key={index + 1}
          dropId={`${pdfId}-${index + 1}`}
          asyncPage={page}
          scale={scale}
        />
      ))}
    </>
  );
};

export default PdfPages;
