import { createAction } from "@/utils/reducer";
import { SIGNATURES_ACTION_TYPES } from "./types";

export const fetchSignaturesStart = () =>
  createAction(SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_START);

export const fetchSignaturesSuccess = (signaturesArray) =>
  createAction(
    SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_SUCCESS,
    signaturesArray
  );

export const fetchSignaturesFailed = (error) =>
  createAction(SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_FAILED, error);

export const addSignature = (signature) =>
  createAction(SIGNATURES_ACTION_TYPES.ADD_SIGNATURE, signature);
