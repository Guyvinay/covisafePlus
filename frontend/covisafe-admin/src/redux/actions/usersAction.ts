import { Dispatch } from "react"
import { FETCH_USER_DATA_FAILURE, FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCES } from "./actionTypes/userActionTypes";
import { FetchUserDataAction } from "./types/userDataTypes";
import axios, { AxiosError } from "axios";

const setUserDataRequest = (loading: boolean): FetchUserDataAction => ({
  type: FETCH_USER_DATA_REQUEST,
  payload: loading,
});

const userDataSucces = (data:any[]) : FetchUserDataAction =>({
    type: FETCH_USER_DATA_SUCCES,
    payload: data,
});

const userDataFailure = (error: string) :FetchUserDataAction =>({
    type: FETCH_USER_DATA_FAILURE,
    payload: error,
})

export const fetchUserData = (token:string)=>{

    return async (dispatch :Dispatch<FetchUserDataAction>):Promise<void> => {

        
        try {
            dispatch(setUserDataRequest(true));

            const baseURL = process.env.REACT_APP_API_BASE_URL;

            const response = await axios.get(`${baseURL}/members`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });

            const data = response.data;

            dispatch(userDataSucces(data));

        } catch( error ) {

            const errorMessage = (error as AxiosError).message;

            dispatch(userDataFailure(errorMessage));

        } finally {

            dispatch(setUserDataRequest(false));

        }
    };

}