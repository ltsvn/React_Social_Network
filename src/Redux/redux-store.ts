import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./Dialogs-Reducer";
import profileReducer from "./Profile-Reducer";

import usersReducer from "./Users-Reducer";
import authReducer from "./auth-reducer";


export type AppStateType = ReturnType<typeof rootReducers>

export const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer
    usersPage: usersReducer,
    auth: authReducer
});

export let store = createStore(rootReducers);
//@ts-ignore
window.store = store;

export default store;