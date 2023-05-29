export const selectSignatures = (state, id) => {
  if (id) {
    return state.signature.signatures.find((signature) => signature.id === id);
  }
  return state.signature.signatures;
};

export const selectSignaturesIsLoading = (state) =>
  state.signature.selectSignaturesIsLoading;

export const selectCurrentSignatureBoxId = (state) => {
  return state.signature.currentSignatureBoxId;
};

export const selectCurrentSignaturesBox = (state) => {
  const currentSignatureBoxId = state.signature.currentSignatureBoxId;
  return state.signature.signatures.find(
    (signature) => signature.id === currentSignatureBoxId
  );
};
