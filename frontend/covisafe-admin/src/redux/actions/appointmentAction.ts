import { Dispatch } from "react"
import { DeleteAppointmentDataAction, FetchAppointmentDataAction } from "./types/appointmentDataTypes"
import axios, { AxiosError } from "axios";
import { DELETE_APPOINTMENT_DATA_FAILURE, DELETE_APPOINTMENT_DATA_REQUEST, DELETE_APPOINTMENT_DATA_SUCCES, FETCH_APPOINTMENT_DATA_FAILURE, FETCH_APPOINTMENT_DATA_REQUEST, FETCH_APPOINTMENT_DATA_SUCCES } from "./actionTypes/appointmentActionTypes";
import { error } from "console";

const setAppointmetDataRequest = (
    loading: boolean
) : FetchAppointmentDataAction =>({
    type: FETCH_APPOINTMENT_DATA_REQUEST,
    payload: loading,
});

const appointmentDataSucces = (
    data: any[]
): FetchAppointmentDataAction => ({
    type: FETCH_APPOINTMENT_DATA_SUCCES,
    payload: data,
});

const appointmentDataFailture = (
  error: string
): FetchAppointmentDataAction => ({
  type: FETCH_APPOINTMENT_DATA_FAILURE,
  payload: error,
});

const setAppointmentDeleteRequest = (
  loading: boolean
): DeleteAppointmentDataAction => ({
  type: DELETE_APPOINTMENT_DATA_REQUEST,
  payload: loading,
});

const appointmentDataDeleteSucces = (
  data: string
): DeleteAppointmentDataAction => ({
    type: DELETE_APPOINTMENT_DATA_SUCCES,
    payload:data,
});

const appointmentDataDeleteFailure = (
  error: string
): DeleteAppointmentDataAction => ({
  type: DELETE_APPOINTMENT_DATA_FAILURE,
  payload: error,
});

export const fetchAppointmentData = (token:string) =>{
    return async (
      dispatch: Dispatch<FetchAppointmentDataAction>
    ): Promise<void> => {
      try {
        dispatch(setAppointmetDataRequest(true));

        const baseURL = process.env.REACT_APP_API_BASE_URL;

        const response = await axios.get(`${baseURL}/appointments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;

        dispatch(appointmentDataSucces(data));
      } catch (error) {
        const errorMessage = (error as AxiosError).message;

        dispatch(appointmentDataFailture(errorMessage));
      } finally {
        dispatch(setAppointmetDataRequest(false));
      }
    };
}

export const DeleteAppointmentData = ( token:string, uuid:string) =>{
    return async (
      dispatch: Dispatch<DeleteAppointmentDataAction>
    ): Promise<void> => {
      try {
        dispatch(setAppointmentDeleteRequest(true));

        const baseURL = process.env.REACT_APP_API_BASE_URL;

        const response = await axios.delete(`${baseURL}/appointments/${uuid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        const errorMessage = (error as AxiosError).message;
      } finally {
        dispatch(setAppointmentDeleteRequest(false));
      }
    };
}
