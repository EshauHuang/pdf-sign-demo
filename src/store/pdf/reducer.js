import { PDF_ACTION_TYPES } from "./types";

const INITIAL_STATE = {
  pdf: null,
  numPages: 0,
  scale: 2,
};

export const pdfReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PDF_ACTION_TYPES.SET_PDF_INFO:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
