export const addComplain = (complain) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("Complains")
      .add({
        ...complain,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "ADD_COMPLAIN", complain });
      })
      .catch((error) => {
        dispatch({ type: "ADD_COMPLAIN_ERROR", error });
      });
  };
};
