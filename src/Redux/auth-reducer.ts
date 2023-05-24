import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/API";

const SET_USER_DATA = 'SET_USER_DATA';

export const initialState: initialStateType = {
    id: 2,
    email: '',
    login: '',
    isAuth: false

}

export type  initialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

export type UsersReducerAT = ReturnType<typeof setAuthUserData>

const authReducer = (state: initialStateType = initialState, action: UsersReducerAT): initialStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state;
    }

}
export const setAuthUserData = (id: number, email: string, login: string) =>
    ({
        type: SET_USER_DATA,
        data: {id, login, email}

    })as const

export const getAuthUserData = () =>  (dispatch: Dispatch<UsersReducerAT>) => {
        authAPI.me().then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email));
            }
        })
    }

    export const login = (email, password, rememberMe) =>  (dispatch: Dispatch<UsersReducerAT>) => {
        authAPI.me().then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email));
            }
        })
    }


export default authReducer;