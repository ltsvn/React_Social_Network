import {ActionsTypes} from "./Store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych', avatar: 'https://img.icons8.com/ios-glyphs/2x/person-male.png'},
        {id: 2, name: 'Andrey', avatar: 'https://img.icons8.com/ios-glyphs/2x/person-male.png'},
        {id: 3, name: 'Sveta', avatar: 'https://img.icons8.com/ios-glyphs/2x/person-male.png'},
        {id: 4, name: 'Tolya', avatar: 'https://img.icons8.com/ios-glyphs/2x/person-male.png'},
        {id: 5, name: 'Sasha', avatar: 'https://img.icons8.com/ios-glyphs/2x/person-male.png'},
        {id: 6, name: 'Viktor', avatar: 'https://img.icons8.com/ios-glyphs/2x/person-male.png'},
    ] as DialogType[],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'T'},
        {id: 5, message: 'Sa'},
        {id: 6, message: 'V'},
    ]as MessageType[],
    newMessageBody: ''
}
export type DialogType = {
    id: number
    name: string
    avatar:string
}
export type MessageType = {
    id: number
    message: string
}
export type  initialStateType = typeof initialState

export type DialogsUsersAT = ReturnType<typeof updateNewMessageBodyActionCreator> | ReturnType<typeof sendMessageActionCreator>

const dialogsReducer = (state: initialStateType = initialState, action: DialogsUsersAT): initialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 7, message: body}],
            };

        default:
            return state;
    }
}

export const updateNewMessageBodyActionCreator = (body: string) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }) as const

export const sendMessageActionCreator = () =>
    ({
        type: SEND_MESSAGE,
    }) as const

export default dialogsReducer;