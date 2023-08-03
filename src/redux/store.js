import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './reducers/home.reducer';
import expensesReducer from './reducers/expenses.reducer';
import uiReducer from './reducers/ui.Reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  expenses: expensesReducer,
  ui: uiReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
