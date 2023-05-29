import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/API";
import {AppDispatchThunk, AppStateType} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

export const initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}

export type  initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: boolean
}

export type UsersReducerAT = ReturnType<typeof setAuthUserData>

const authReducer = (state: initialStateType = initialState, action: UsersReducerAT): initialStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state;
    }

}
export const setAuthUserData = (id: null, email: null, login: null, isAuth: boolean) =>
    ({
        type: SET_USER_DATA,
        payload: {id, login, email, isAuth}

    }) as const

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email, true));
        }
    })
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AnyAction>


export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: AppDispatchThunk) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
           let message =  response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}


export const logout = () => (dispatch: Dispatch<UsersReducerAT>) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}


export default authReducer;