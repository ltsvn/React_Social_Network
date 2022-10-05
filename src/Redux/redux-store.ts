import {combineReducers, createStore} from "redux";
import dialogsReducer from "./Dialogs-Reducer";
// import sidebarReducer from "./SideBar-Reducer";
import profileReducer from "./Profile-Reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer
});

export let store = createStore(reducers);