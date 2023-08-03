import {
  SET_EXPENSES_LIST,
  CLEAR_EXPENSES_LIST,
  SET_PIECHART_DATA,
  CLEAR_PIECHART_DATA,
  STOP_LOADING,
} from './type';
import { expenses, piechart } from '../../../data'

export const getExpensesList = () => dispatch => {
  dispatch({ type: CLEAR_EXPENSES_LIST });
  setTimeout(() => {
    dispatch({ type: SET_EXPENSES_LIST, payload: expenses })
    dispatch({ type: STOP_LOADING })
  }, 3000)
};


export const getPieChartData = () => dispatch => {
  dispatch({ type: CLEAR_PIECHART_DATA });
  setTimeout(() => {
    dispatch({ type: SET_PIECHART_DATA, payload: piechart })
    dispatch({ type: STOP_LOADING })
  }, 3000)
};
