export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESSFULLY" });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILED", error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCESSFULLY" });
      });
  };
};

export const signUp = (addUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(addUser.email, addUser.password)
      .then((responce) => {
        firestore
          .collection("users")
          .doc(responce.user.uid)
          .set({
            firstName: addUser.firstName,
            lastName: addUser.lastName,
            initials: addUser.firstName[0] + addUser.lastName[0],
          });
      })
      .then((dispatch) => {
        dispatch({ type: "SIGNUP_SUCCESSFULLY" });
      })
      .catch((error) => {
        dispatch({ type: "SIGNUP_FAILED", error });
      });
  };
};
export const signUpWithAdmin = (addUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(addUser.email, addUser.password)
      .then((responce) => {
        firestore
          .collection("users")
          .doc(responce.user.uid)
          .set({
            firstName: addUser.firstName,
            lastName: addUser.lastName,
            initials: addUser.firstName[0] + addUser.lastName[0],
            userType: addUser.userType,
          });
      })
      .then((dispatch) => {
        dispatch({ type: "SIGNUPWithAdmin_SUCCESSFULLY" });
      })
      .catch((error) => {
        dispatch({ type: "SIGNUPWithAdmin_FAILED", error });
      });
  };
};
