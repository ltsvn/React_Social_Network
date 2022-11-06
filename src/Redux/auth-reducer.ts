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
export const setAuthUserData = (data: {id: number, email: string, login: string}) =>
    ({
        type: SET_USER_DATA,
        data

    })as const


export default authReducer;