import {usersAPI} from "../api/API";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState: initialStateType = {
    users: [],
    totalUsersCount: 0
}

//types
export type UserType = {
    id: number
    photos: {small: string,large: string}
    followed: boolean
    name: string
    status: string
    location: {city: string, country: string}
}
export type  initialStateType = {
    users: UserType[]
    totalUsersCount: number
}

export type friendsScrollReducerAT = ReturnType<typeof setUsers> | ReturnType<typeof setTotalUsersCount>

type ThunksType = ThunkAction<void, AppStateType, unknown, friendsScrollReducerAT>;


const friendsScrollReducer = (state: initialStateType = initialState, action: friendsScrollReducerAT): initialStateType => {

    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users}

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }

}

//action creator

export const setUsers = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
}) as const


//thunks

export const getUsers = (page: number, pageSize: number): ThunksType => {
    return async (dispatch: Dispatch<friendsScrollReducerAT>) => {


        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}



export default friendsScrollReducer;