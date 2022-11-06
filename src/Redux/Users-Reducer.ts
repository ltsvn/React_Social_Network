import {ActionsTypes} from "./Store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


export type UserType = {
    id: number
    photos: {
        small: string,
        large: string,
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

const initialState: initialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress:[]
}

export type  initialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array
}

export type UsersReducerAT = ReturnType<typeof setUsers> | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

const usersReducer = (state: initialStateType = initialState, action: UsersReducerAT): initialStateType => {

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
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
                /*state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })*/
            }
        }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }

}
export const follow = (userId: number) =>
    ({
        type: FOLLOW,
        userId

    })as const

export const unFollow = (userId: number) =>
    ({
        type: UNFOLLOW,
        userId
    }) as const

export const setUsers = (users: UserType[]) =>
    ({
        type: SET_USERS,
        users
    }) as const

export const setCurrentPage = (currentPage: number) =>
    ({
        type: SET_CURRENT_PAGE,
        currentPage
    }) as const

export const setTotalUsersCount = (totalUsersCount: number) =>
    ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }) as const

export const toggleIsFetching = (isFetching: boolean) =>
    ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    }) as const

export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
    ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }) as const

export default usersReducer;