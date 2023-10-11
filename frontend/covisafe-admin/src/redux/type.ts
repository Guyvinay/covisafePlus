import { AppointmentDataState } from "./actions/types/appointmentDataTypes";
import { AppState } from "./actions/types/loginTypes";
import { UserDataState } from "./actions/types/userDataTypes";

export interface RootState {
  user: AppState;
  userData: UserDataState;
  appointmentData: AppointmentDataState;
}
