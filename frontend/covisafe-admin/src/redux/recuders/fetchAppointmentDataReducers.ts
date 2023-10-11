import { FETCH_APPOINTMENT_DATA_FAILURE, FETCH_APPOINTMENT_DATA_REQUEST, FETCH_APPOINTMENT_DATA_SUCCES } from "../actions/actionTypes/appointmentActionTypes";
import { AppointmentDataState, FetchAppointmentDataAction } from "../actions/types/appointmentDataTypes";

const initialState : AppointmentDataState = {
    data: [],
    loading: false,
    error: null,
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

export default appointmentDataReducer;