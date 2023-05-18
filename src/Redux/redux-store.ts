import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./Dialogs-Reducer";
import profileReducer from "./Profile-Reducer";
import usersReducer from "./Users-Reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


export type AppStateType = ReturnType<typeof rootReducers>

export const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

export let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store;

export default store;