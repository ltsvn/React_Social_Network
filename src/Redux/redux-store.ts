import {combineReducers, createStore} from "redux";
import dialogsReducer from "./Dialogs-Reducer";
// import sidebarReducer from "./SideBar-Reducer";
import profileReducer from "./Profile-Reducer";
import {StoreType} from "./Store";


export type AppStateType = ReturnType<typeof rootReducers>

export let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer
});

export const store: StoreType = createStore(rootReducers);

window.store = store

export default store;