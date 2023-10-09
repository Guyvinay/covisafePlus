import { FETCH_USER_DATA_FAILURE, FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCES } from "../actions/actionTypes/userActionTypes";
import { FetchUserDataAction, UserDataState } from "../actions/types/userDataTypes";

const initialState : UserDataState = {
    data: [],
    loading: false,
    error: null,
}

const userDataReducer = (state = initialState, action :FetchUserDataAction):UserDataState =>{

    switch(action.type){

        case FETCH_USER_DATA_REQUEST:
            return {
              ...state,
              loading: true,
              error: null,
            };

        case FETCH_USER_DATA_SUCCES:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }

        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state;

    }

}

export default userDataReducer;