import {AppDispatchThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const initialState: initialStateType = {
    initialized: false

}

export type  initialStateType = {
    initialized: boolean
}

export type UsersReducerAT = ReturnType<typeof initializedSuccess>

const appReducer = (state: initialStateType = initialState, action: UsersReducerAT): initialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized:true
            }
        }
        default:
            return state;
    }

}
export const initializedSuccess = () =>
    ({
        type: INITIALIZED_SUCCESS,
    }) as const

export let initializeApp = () => (dispatch: AppDispatchThunk) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess());
    })
}

export default appReducer;