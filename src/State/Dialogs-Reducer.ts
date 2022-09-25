import {PostType} from "./StateTS";
import profileReducer from "./Profile-Reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';




 const dialogsReducer = (state, action) => {

     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.body;
             return state;

         case SEND_MESSAGE:
             let body = state.newMessageBody;
             state.newMessageBody = '';
             state.messagesData.push({id: 7, message: body});
             return state;

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