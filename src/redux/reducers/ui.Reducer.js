import {
  CLEAR_ERROR,
  SET_ERROR,
  SET_LOADING,
  STOP_LOADING,
} from '../actions/type';

const initialState = {
  loading: false,
  errors: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    case SET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
};
