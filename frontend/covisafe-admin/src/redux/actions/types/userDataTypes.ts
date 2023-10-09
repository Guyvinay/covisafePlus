import { FETCH_USER_DATA_FAILURE, FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCES } from "../actionTypes/userActionTypes";

export interface FetchUserDataRequestAction {
  type: typeof FETCH_USER_DATA_REQUEST;
  payload:boolean;
}

export interface FetchUserDataSuccesAction {
    type : typeof FETCH_USER_DATA_SUCCES;
    payload: any[];
}

export interface FetchUserDataFailureAction {
    type : typeof FETCH_USER_DATA_FAILURE;
    payload: string;
}

export interface UserDataState {
    loading: boolean;
    data: any[];
    error: null | string;
}

export type FetchUserDataAction =
  | FetchUserDataRequestAction
  | FetchUserDataSuccesAction
  | FetchUserDataFailureAction;