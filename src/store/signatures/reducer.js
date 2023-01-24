import { SIGNATURES_ACTION_TYPES } from "./types";
import signPhoto from "@/assets/sign-photo.png";

const INITIAL_STATE = {
  isLoading: false,
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
          name: "abd",
          email: "4567@gmail.com",
        },
        {
          id: 3,
          name: "qqq飯",
          email: "222@gmail.com",
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
        signatures: payload,
      };

    default:
      return state;
  }
};
