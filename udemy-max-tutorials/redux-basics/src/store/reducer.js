const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case "DECREMENT":
      return {
        ...state, // easier way to write
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.val
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.val
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }) // dont use push we must update immutably
      };
    case "DELETE_RESULT":
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id,1) 1way of doing delete
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      ); // 2nd way for delete
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
