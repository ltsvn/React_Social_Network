import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./Dialogs-Reducer";
import profileReducer from "./Profile-Reducer";
import {StoreType} from "./Store";
import usersReducer from "./Users-Reducer";


export type AppStateType = ReturnType<typeof rootReducers>

export const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer
    usersPage: usersReducer,
});

export let store: StoreType = createStore(rootReducers);

window.store = store;

export default store;