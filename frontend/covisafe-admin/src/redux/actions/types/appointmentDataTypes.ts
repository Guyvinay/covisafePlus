import { FETCH_APPOINTMENT_DATA_FAILURE, FETCH_APPOINTMENT_DATA_REQUEST, FETCH_APPOINTMENT_DATA_SUCCES } from "../actionTypes/appointmentActionTypes";

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

export type FetchAppointmentDataAction =
  | FetchAppointmentDataRequestAction
  | FetchAppointmentDataSuccesAction
  | FetchAppointmentDataFailureAction;
