let initialState = { count: 0 };

export const nameReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }
  return state;
};
