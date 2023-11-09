import { combineReducers } from "redux";
import loginReducer from "./recuders/loginReducers";
import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./recuders/fetchUserDataReducers";
import appointmentDataReducer, { appointmentAddDataReducer, appointmentDeleteDataReducer, appointmentEditDataReducer } from "./recuders/fetchAppointmentDataReducers";

const rootReducer = combineReducers({
  user: loginReducer,
  userData: userDataReducer,
  appointmentData: appointmentDataReducer,
  appointmentDelete:appointmentDeleteDataReducer,
  addAppointmentData: appointmentAddDataReducer,
  editAppointmentData:appointmentEditDataReducer,
});

const store = configureStore({reducer:rootReducer})

export default store;