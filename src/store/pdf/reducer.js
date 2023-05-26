import { PDF_ACTION_TYPES } from "./types";

const INITIAL_STATE = {
  pdf: null,
  numPages: 0,
  scale: 2,
  id: "page",
};

export const pdfReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PDF_ACTION_TYPES.SET_PDF_INFO:
      return {
        ...state,
        ...payload,
      };
    case PDF_ACTION_TYPES.PDF_INIT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
