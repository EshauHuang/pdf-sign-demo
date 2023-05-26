import { DOC_SIGNATURES_ACTION_TYPES } from "./types";

const INITIAL_STATE = {
  isLoading: false,
  isSaved: false,
  signatures: [],
  error: "",
};

export const docSignaturesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case DOC_SIGNATURES_ACTION_TYPES.SET_DOC_SIGNATURES:
      return {
        ...state,
        isSaved: true,
        signatures: payload,
      };

    case DOC_SIGNATURES_ACTION_TYPES.SET_SIGNATURE_IS_SAVED:
      return {
        ...state,
        isSaved: payload,
      };

    case DOC_SIGNATURES_ACTION_TYPES.CREATE_DOC_SIGNATURES:
      return {
        ...state,
        signatures: [
          ...state.signatures,
          {
            ...payload,
            items: [],
          },
        ],
      };

    case DOC_SIGNATURES_ACTION_TYPES.DOC_SIGNATURES_INIT:
      return INITIAL_STATE;

    default:
      return state;
  }
};
