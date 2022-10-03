let initialState = {
  count: 10,
};

function reducer(state = initialState, action) {
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
}

export default reducer;
