import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./Dialogs-Reducer";
import profileReducer from "./Profile-Reducer";
import usersReducer from "./Users-Reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";


export type AppStateType = ReturnType<typeof rootReducers>
export type AppDispatchThunk = ThunkDispatch<AppStateType, unknown, AnyAction>


export const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer
});

export let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store;

export default store;