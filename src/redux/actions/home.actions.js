import {
  SET_CASH_LIST,
  CLEAR_CASH_LIST,
  SET_CHART_DATA,
  CLEAR_CHART_DATA,
  STOP_LOADING
} from './type';
import { cash, chart } from '../../../data'

export const getCashList = () => dispatch => {
  dispatch({ type: CLEAR_CASH_LIST });
  return setTimeout(() => {
    dispatch({ type: SET_CASH_LIST, payload: cash })
    dispatch({ type: STOP_LOADING })
  }, 3000)
};


export const getChartData = () => dispatch => {
  dispatch({ type: CLEAR_CHART_DATA });
  setTimeout(() => {
    dispatch({ type: SET_CHART_DATA, payload: chart })
    dispatch({ type: STOP_LOADING })
  }, 3000)
};
