import authReducer from "./authReducer";
import complainReducer from "./complainReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  complain: complainReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
