const initialState = {
  count: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increase":
      return {
        count: state.count + 1,
      };
    case "Decrease":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;