const initialState = {
  complainCities: [
    { id: "1", title: "Karachi", content: "Sindh, Pakistan" },
    { id: "2", title: "Lahore", content: "Punjab, Pakistan" },
    { id: "3", title: "Islamabad", content: "Punjab, Pakistan" },
    { id: "4", title: "Hyderabad", content: "Sindh, Pakistan" },
    { id: "5", title: "Multan", content: "Punjab, Pakistan" },
  ],
};
const complainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPLAIN":
      console.log("Complain add", action.complain);
      console.log("state", state);
      return state;
    case "ADD_COMPLAIN_ERROR":
      console.log("Add complain error", action.error);
      return state;
    default:
      return state;
  }
};

export default complainReducer;
