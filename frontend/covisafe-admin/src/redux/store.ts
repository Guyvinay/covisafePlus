import { combineReducers } from "redux";
import loginReducer from "./recuders/loginReducers";
import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./recuders/fetchUserDataReducers";

const rootReducer = combineReducers({
  user: loginReducer,
  userData: userDataReducer,
});

const store = configureStore({reducer:rootReducer})

export default store;