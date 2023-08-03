import {
  SET_EXPENSES_LIST,
  CLEAR_EXPENSES_LIST,
  SET_PIECHART_DATA,
  CLEAR_PIECHART_DATA
} from '../actions/type';

const initialState = {
  expenses: [],
  piechart: []
};
export default (state = initialState, action) => {
  switch (action.type) {

    case SET_EXPENSES_LIST:
      return {
        ...state,
        expenses: action.payload,
      };

    case CLEAR_EXPENSES_LIST:
      return {
        ...state,
        expenses: [],
      };
    case SET_PIECHART_DATA:
      return {
        ...state,
        piechart: action.payload,
      };
    case CLEAR_PIECHART_DATA:
      return {
        ...state,
        piechart: [],
      };
    default:
      return state;
  }
};
