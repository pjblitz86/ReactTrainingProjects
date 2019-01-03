import * as actionTypes from "../actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }) // dont use push we must update immutably
      };
    case actionTypes.DELETE_RESULT:
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
