import axios from "axios";
import {
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./actionTypes/loginActionTypes";
import { AppActions } from "./types/loginTypes";
import { Dispatch } from "react";

const setLoading = (loading: boolean): AppActions => ({
  type: SET_LOADING,
  payload: loading,
});

const loginSucces = (token: string): AppActions => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

const loginFail = (): AppActions => ({
  type: LOGIN_FAIL,
});

export const loginUser = (email: string, password: string, toast: any) => {
  return async (dispatch: Dispatch<AppActions>): Promise<void> => {
    try {
      dispatch(setLoading(true));

      const baseURL = process.env.REACT_APP_API_BASE_URL;

      const response = await axios.post(`${baseURL}/users/signin`, {
        email,
        password,
      });

      const { data } = response;

      localStorage.setItem("token", data.token);

      toast({
        title: "Logged in",
        description: "Your account has logged in ",
        status: "success",
        position: "top",
        duration: "9000",
        isClosable: "true",
      });

      dispatch(loginSucces(data.token));
    } catch (error) {
      toast({
        title: "Login fail.",
        description: "Unable to login.",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });

      dispatch(loginFail());
    } finally {
      dispatch(setLoading(false));
    }
  };
};
