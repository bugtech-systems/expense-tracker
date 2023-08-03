import {
  SET_CASH_LIST,
  CLEAR_CASH_LIST,
  SET_CHART_DATA,
  CLEAR_CHART_DATA
} from '../actions/type';

const initialState = {
  cash: [],
  chart: {
    datasets: []
  }
};
export default (state = initialState, action) => {
  switch (action.type) {

    case SET_CASH_LIST:
      return {
        ...state,
        cash: action.payload,
      };

    case CLEAR_CASH_LIST:
      return {
        ...state,
        cash: [],
      };
    case SET_CHART_DATA:
      return {
        ...state,
        chart: action.payload,
      };
    case CLEAR_CHART_DATA:
      return {
        ...state,
        chart: {
          datasets: []
        },
      };
    default:
      return state;
  }
};
