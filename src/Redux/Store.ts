import {ProfileReducerAT} from "./Profile-Reducer";
import {DialogsUsersAT} from "./Dialogs-Reducer";
import {UsersReducerAT} from "./Users-Reducer";
// import sidebarReducer from "./SideBar-Reducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void

    getState: () => RootStateType
    subscribe: (observer: () => void) => void

    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ProfileReducerAT | UsersReducerAT | DialogsUsersAT

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It is my first post!', likesCount: 23}
            ],
            newPostText: "New Post!"

        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Tolya'},
                {id: 5, name: 'Sasha'},
                {id: 6, name: 'Viktor'},
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Fine'},
                {id: 4, message: 'T'},
                {id: 5, message: 'Sa'},
                {id: 6, message: 'V'},
            ],
            newMessageBody: ''
        },
        // sidebar: {}
    },
    _callSubscriber() {
    },//method

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {//{type: 'ADD_POST'}
        this._callSubscriber();

    }
}

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageBody: string
}
//
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    // sidebar: SidebarType
}


export default store;

