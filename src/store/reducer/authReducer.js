const initialState = {
  authenticationError: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESSFULLY":
      return {
        ...state,
        authenticationError: null,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        authenticationError: "Login Failed, Incorrect Email or Password",
      };
    case "SIGNUP_SUCCESSFULLY":
      return {
        ...state,
        authenticationError: null,
      };
    case "SIGNUP_FAILED":
      return {
        ...state,
        authenticationError: action.error.message,
      };

    case "SIGNOUT_SUCCESSFULLY":
      return state;
    default:
      return state;
  }
};

export default authReducer;
