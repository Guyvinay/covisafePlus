import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SET_LOADING,
} from "../actions/actionTypes/loginActionTypes";
import { AppActions, AppState } from "../actions/types/loginTypes";

const initialState: AppState = {
  loading: false,
  loggedIn: false,
  token: null,
};

const loginReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loggedIn: false,
        token: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
