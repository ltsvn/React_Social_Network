import {ActionsTypes} from "./Store";
import users from "../Components/Users/Users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

const initialState: initialStateType = {
    users: [],
}

export type  initialStateType = {
    users: UserType[]
}

const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state;
    }
}

export const followAC = (userId: number) =>
    ({
        type: FOLLOW,
        userId

    }) as const

export const unFollowAC = (userId: number) =>
    ({
        type: UNFOLLOW,
        userId
    }) as const

export const setUsersAC = (users: UserType[]) =>
    ({
        type: SET_USERS,
        users
    }) as const

export default usersReducer;