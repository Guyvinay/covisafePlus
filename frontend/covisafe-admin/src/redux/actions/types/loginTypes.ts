import { type } from "os";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SET_LOADING,
} from "../actionTypes/loginActionTypes";

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface LoginSuccesAction {
  type: typeof LOGIN_SUCCESS;
  payload: string;
}

export interface LoginFailAction {
  type: typeof LOGIN_FAIL;
}

export interface AppState {
  loading: boolean;
  loggedIn: boolean;
  token: string | null;
}

export type AppActions = SetLoadingAction | LoginSuccesAction | LoginFailAction;
