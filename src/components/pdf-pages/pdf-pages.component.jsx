import { useState, useEffect } from "react";

import PdfPage from "@/components/pdf-page/pdf-page.component";

const PdfPages = (props) => {
  const { getPdfPage, pageCounts, canvasRefs, scale } = props;
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (!pageCounts) return;

    const pageCountsArray = Array.from({ length: pageCounts }, (_, i) => i + 1);
    const pages = pageCountsArray.map((i) => getPdfPage(i));

    setPages(pages);
  }, [getPdfPage, pageCounts]);

  return (
    <div className="pdf-pages-container">
      {pages.map((page, index) => (
        <PdfPage
          key={index + 1}
          dropId={`page-${index + 1}`}
          asyncPage={page}
          scale={scale}
        />
      ))}
    </div>
  );
};

export default PdfPages;
