let initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - action.payload,
    };
  }
  return state;
};
