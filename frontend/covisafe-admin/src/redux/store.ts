import { applyMiddleware, combineReducers } from "redux";
import loginReducer from "./recuders/loginReducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    user:loginReducer,
});

const store = configureStore({reducer:rootReducer})

export default store;