import { act } from "react-dom/test-utils";
import {
  ADD_APPOINTMENT_DATA_FAILURE,
  ADD_APPOINTMENT_DATA_REQUEST,
  ADD_APPOINTMENT_DATA_SUCCES,
  DELETE_APPOINTMENT_DATA_FAILURE,
  DELETE_APPOINTMENT_DATA_REQUEST,
  DELETE_APPOINTMENT_DATA_SUCCES,
  EDIT_APPOINTMENT_DATA_FAILURE,
  EDIT_APPOINTMENT_DATA_REQUEST,
  EDIT_APPOINTMENT_DATA_SUCCES,
  FETCH_APPOINTMENT_DATA_FAILURE,
  FETCH_APPOINTMENT_DATA_REQUEST,
  FETCH_APPOINTMENT_DATA_SUCCES,
} from "../actions/actionTypes/appointmentActionTypes";
import {
  AddAppointmentDataAction,
  AddAppointmentDataState,
  AppointmentDataState,
  DeleteAppointmentDataAction,
  DeleteAppointmentDataState,
  EditAppointmentDataAction,
  EditAppointmentDataState,
  FetchAppointmentDataAction,
} from "../actions/types/appointmentDataTypes";

const initialState : AppointmentDataState = {
    data: [],
    loading: false,
    error: null,
}

const initialDelState: DeleteAppointmentDataState = {
  data: null,
  loading: false,
  error: null,
};

const initialAddState: AddAppointmentDataState = {
  data: null,
  loading: false,
  error: null,
}

const initialEditState: EditAppointmentDataState  = {
  data:null,
  loading:false,
  error:null,
}

const appointmentDataReducer = (
  state = initialState,
  action: FetchAppointmentDataAction 
): AppointmentDataState => {
  switch (action.type) {
    case FETCH_APPOINTMENT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_APPOINTMENT_DATA_SUCCES:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case FETCH_APPOINTMENT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const appointmentDeleteDataReducer = (
  state = initialDelState,
  action: DeleteAppointmentDataAction
): DeleteAppointmentDataState => {
  switch (action.type) {
    case DELETE_APPOINTMENT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DELETE_APPOINTMENT_DATA_SUCCES:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case DELETE_APPOINTMENT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


export const appointmentAddDataReducer = (
  state = initialAddState,
  action: AddAppointmentDataAction
): AddAppointmentDataState => {
  switch (action.type) {
    case ADD_APPOINTMENT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_APPOINTMENT_DATA_SUCCES:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case ADD_APPOINTMENT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const appointmentEditDataReducer = (
  state = initialEditState,
  action: EditAppointmentDataAction
) => {
  switch(action.type){
    case EDIT_APPOINTMENT_DATA_REQUEST:
      return {
        ...state,
        loading:action.payload,
        error:null,
      }

    case EDIT_APPOINTMENT_DATA_SUCCES:
      return{
        ...state,
        loading:false,
        data:action.payload,
      }

    case EDIT_APPOINTMENT_DATA_FAILURE:
      return{
        ...state,
        loading:false,
        error:action.payload,
      }

    default:
      return state;
  }
};





export default appointmentDataReducer;