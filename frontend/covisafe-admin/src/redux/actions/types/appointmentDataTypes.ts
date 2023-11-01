import {
  ADD_APPOINTMENT_DATA_FAILURE,
  ADD_APPOINTMENT_DATA_REQUEST,
  ADD_APPOINTMENT_DATA_SUCCES,
  DELETE_APPOINTMENT_DATA_FAILURE,
  DELETE_APPOINTMENT_DATA_REQUEST,
  DELETE_APPOINTMENT_DATA_SUCCES,
  FETCH_APPOINTMENT_DATA_FAILURE,
  FETCH_APPOINTMENT_DATA_REQUEST,
  FETCH_APPOINTMENT_DATA_SUCCES,
} from "../actionTypes/appointmentActionTypes";

// for [GET] requests on api end point `/applointments`
export interface FetchAppointmentDataRequestAction {
    type: typeof FETCH_APPOINTMENT_DATA_REQUEST;
    payload: boolean;
}

export interface FetchAppointmentDataSuccesAction {
    type: typeof FETCH_APPOINTMENT_DATA_SUCCES;
    payload: any[];
}

export interface FetchAppointmentDataFailureAction {
    type: typeof FETCH_APPOINTMENT_DATA_FAILURE;
    payload: string;
}

export interface AppointmentDataState {
    loading: boolean;
    data: any[];
    error: null | string;
}

// for [DELETE] requests on api end point `/applointments`
export interface DeleteAppointmentDataRequestAction {
    type: typeof DELETE_APPOINTMENT_DATA_REQUEST;
    payload: boolean;
}
export interface DeleteAppointmentDataSuccesAction {
    type: typeof DELETE_APPOINTMENT_DATA_SUCCES;
    payload: string;
}

export interface DeleteAppointmentDataFailureAction {
    type: typeof DELETE_APPOINTMENT_DATA_FAILURE;
    payload: string | null;
}

export interface DeleteAppointmentDataState {
    loading: boolean;
    data: any;
    error: null | string;
}

// for [POST] reqeust on `/appointments`

export interface AddAppointmentDataReqestAction{
    type: typeof ADD_APPOINTMENT_DATA_REQUEST;
    payload:boolean;
}

export interface AddAppointmentDataSuccessAction {
    type: typeof ADD_APPOINTMENT_DATA_SUCCES;
    payload: any;
}

export interface AddAppointmentDataFaliureAction {
    type: typeof ADD_APPOINTMENT_DATA_FAILURE;
    payload: string | null;
}

export interface AddAppointmentDataState {
  loading: boolean;
  data: any;
  error: null | string;
}

export type FetchAppointmentDataAction =
  | FetchAppointmentDataRequestAction
  | FetchAppointmentDataSuccesAction
  | FetchAppointmentDataFailureAction;

export type DeleteAppointmentDataAction =
  | DeleteAppointmentDataRequestAction
  | DeleteAppointmentDataSuccesAction
  | DeleteAppointmentDataFailureAction;


export type AddAppointmentDataAction =
  | AddAppointmentDataReqestAction
  | AddAppointmentDataSuccessAction 
  | AddAppointmentDataFaliureAction;