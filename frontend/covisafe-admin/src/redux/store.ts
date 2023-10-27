import { combineReducers } from "redux";
import loginReducer from "./recuders/loginReducers";
import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./recuders/fetchUserDataReducers";
import appointmentDataReducer from "./recuders/fetchAppointmentDataReducers";

const rootReducer = combineReducers({
  user: loginReducer,
  userData: userDataReducer,
  appointmentData:appointmentDataReducer,
});

const store = configureStore({reducer:rootReducer})

export default store;