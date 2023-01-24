import { createAction } from "@/utils/reducer";
import { DOC_SIGNATURES_ACTION_TYPES } from "./types";

const addSignatureItem = (docSignatures, dropTo, signatureItem) => {
  const newDocSignatures = docSignatures.map((signature) => {
    if (signature.id === dropTo) {
      return {
        ...signature,
        items: [...signature.items, signatureItem],
      };
    }
    return signature;
  });

  return newDocSignatures;
};

const editSignatureItem = (docSignatures, id, props) => {
  const [docSignaturesId, itemId] = id.split("/");
  const [, itemIndex] = itemId.split("-");

  const newDocSignatures = docSignatures.map((signature) => {
    if (signature.id === docSignaturesId) {
      return {
        ...signature,
        items: signature.items.map((item, index) => {
          return index + 1 === Number(itemIndex)
            ? {
                ...item,
                ...props,
              }
            : item;
        }),
      };
    }

    return signature;
  });

  return newDocSignatures;
};

const editDocSignature = (docSignatures, id, props) => {
  const newDocSignatures = docSignatures.map((signature) => {
    if (signature.id === id) {
      return {
        ...signature,
        ...props,
      };
    }

    return signature;
  });

  return newDocSignatures;
};

export const addSignatureToDoc = (docSignatures, dropTo, signatureItem) => {
  const newDocSignatures = addSignatureItem(
    docSignatures,
    dropTo,
    signatureItem
  );
  return createAction(
    DOC_SIGNATURES_ACTION_TYPES.SET_DOC_SIGNATURES,
    newDocSignatures
  );
};

export const editSignaturePosition = (docSignatures, id, x, y) => {
  const newDocSignatures = editSignatureItem(docSignatures, id, { x, y });
  return createAction(
    DOC_SIGNATURES_ACTION_TYPES.SET_DOC_SIGNATURES,
    newDocSignatures
  );
};

export const addSignatureCanvas = (docSignatures, id, canvas) => {
  const newDocSignatures = editDocSignature(docSignatures, id, { canvas });

  return createAction(
    DOC_SIGNATURES_ACTION_TYPES.SET_DOC_SIGNATURES,
    newDocSignatures
  );
};

export const addSignatureContentEl = (docSignatures, id, contentEl) => {
  const newDocSignatures = editSignatureItem(docSignatures, id, { contentEl });

  return createAction(
    DOC_SIGNATURES_ACTION_TYPES.SET_DOC_SIGNATURES,
    newDocSignatures
  );
};

export const waitSignatureSave = () =>
  createAction(DOC_SIGNATURES_ACTION_TYPES.SET_SIGNATURE_IS_SAVED, false);

export const createNewDocSignature = (props) => {
  return createAction(DOC_SIGNATURES_ACTION_TYPES.CREATE_DOC_SIGNATURES, props);
};
