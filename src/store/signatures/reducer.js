import { SIGNATURES_ACTION_TYPES } from "./types";
import signPhoto from "@/assets/sign-photo.png";

const INITIAL_STATE = {
  isLoading: false,
  currentSignatureBoxId: "box-1",
  signatures: [
    {
      id: "box-1",
      items: [
        {
          id: 1,
          name: "咖哩 飯",
          email: "123@gmail.com",
          photo: signPhoto,
        },
        {
          id: 2,
          name: "王小明",
          email: "4567@gmail.com",
          text: "王小明",
          color: "black",
          font: "Chenyuluoyan-Monospaced",
        },
        {
          id: 3,
          name: "陳大明",
          email: "222@gmail.com",
          text: "陳大明",
          color: "#0073EA",
          font: "Noto Serif TC",
        },
        {
          id: 4,
          name: "小中大",
          email: "222@gmail.com",
          text: "小中大",
          color: "#D83A52",
          font: "Noto Sans TC",
        },
      ],
    },
  ],
  error: "",
};

export const signaturesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_START:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signatures: payload,
      };

    case SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_FAILED:
      return {
        ...state,
        error: payload,
      };

    case SIGNATURES_ACTION_TYPES.ADD_SIGNATURE:
      return {
        ...state,
        signatures: payload,
      };

    default:
      return state;
  }
};
