import { Dispatch } from "react"
import {
  AddAppointmentDataAction,
  DeleteAppointmentDataAction,
  FetchAppointmentDataAction,
} from "./types/appointmentDataTypes";
import axios, { AxiosError } from "axios";
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
} from "./actionTypes/appointmentActionTypes";
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


const setAppointmentAddRequest = (
  loading:boolean
) : AddAppointmentDataAction => ({
  type: ADD_APPOINTMENT_DATA_REQUEST,
  payload:loading,
});

const appointmentDataAddSucces = (
  data: any
): AddAppointmentDataAction => ({
  type: ADD_APPOINTMENT_DATA_SUCCES,
  payload: data,
});

const appointmentDataAddFailure = (
  error:string
): AddAppointmentDataAction => ({
  type: ADD_APPOINTMENT_DATA_FAILURE,
  payload: error,
})

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

export const deleteAppointmentData = ( token:string, uuid:string,toast:any) =>{
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

        const {data} = response;

        toast({
          title: "Appointment deleted succesfully ",
          description: "we have deleted your appointment",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });

        dispatch(appointmentDataDeleteSucces(data));

      } catch (error) {
        const errorMessage = (error as AxiosError).message;

        dispatch(appointmentDataDeleteFailure(errorMessage));
      } finally {

        dispatch(setAppointmentDeleteRequest(false));

      }
    };  
}


export const addAppointmentData = (token:string,memberId:string, centerId:string,body:any,toast:any)=>{
  return async (
    dispatch: Dispatch<AddAppointmentDataAction>
  ): Promise<void> => {
    try{
      
      dispatch(setAppointmentAddRequest(true));

      const baseURL = process.env.REACT_APP_API_BASE_URL;

      const response = await axios.post(
        `${baseURL}/appointments/${memberId}/${centerId}`,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      
      const { data } = response;        
      
      dispatch(appointmentDataAddSucces(data));

       toast({
         title: "Appointment booked succesfully ",
         description: "we have booked your appointment",
         status: "success",
         duration: 9000,
         isClosable: true,
         position: "top",
       });

    } catch (error){

      const errorMessage = (error as AxiosError).message;

      dispatch(appointmentDataAddFailure(errorMessage));

      toast({
        title: "Unable to book appointment ",
        description: "error while booking appointment",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });

    } finally {

      dispatch(setAppointmentAddRequest(false));

    }
  };
}