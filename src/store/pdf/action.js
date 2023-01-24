import { createAction } from "@/utils/reducer";
import { PDF_ACTION_TYPES } from "./types";

export const pdfUpload = (pdf) => {
  const { numPages } = pdf._pdfInfo;

  return createAction(PDF_ACTION_TYPES.SET_PDF_INFO, {
    pdf,
    numPages,
  });
};
