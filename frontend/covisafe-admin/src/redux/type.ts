import { AddAppointmentDataState, AppointmentDataState, DeleteAppointmentDataState, EditAppointmentDataState } from "./actions/types/appointmentDataTypes";
import { AppState } from "./actions/types/loginTypes";
import { UserDataState } from "./actions/types/userDataTypes";

export interface RootState {
  user: AppState;
  userData: UserDataState;
  appointmentData: AppointmentDataState;
  appointmentDelete: DeleteAppointmentDataState;
  addAppointmentData: AddAppointmentDataState;
  editAppointmentData: EditAppointmentDataState;
}
