export const addComplain = (complain) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profileData = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("Complains")
      .add({
        ...complain,
        userFirstName: profileData.firstName,
        userLastName: profileData.lastName,
        userId: userId,
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
export const upDateComplainStatus = (updateComplain) => {
  const docId = updateComplain.id;
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("Complains")
      .doc(docId)
      .update({
        ...updateComplain,
        status: updateComplain.status,
      })
      .then(() => {
        dispatch({ type: "UPDATE_COMPALAIN", updateComplain });
      })
      .catch((error) => {
        dispatch({ type: "UPDATE_COMPALAIN_ERROR", error });
      });
  };
};
