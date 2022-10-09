import {ActionsTypes} from "./Store";
import profileReducer from "./Profile-Reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type  initialStateType = {
    dialogsData:Array<DialogType>
    messagesData: Array<MessageType>
    newMessageBody: string
}

const dialogsReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {

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