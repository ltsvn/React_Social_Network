import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../State/StateTS";
import {  sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../State/Dialogs-Reducer";

export type messageType = {
    message: string
}

type DialogsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsType> = ({state, dispatch}) => {
    //let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map(message => <Message message={message.message}/>)
    let newMessagesBody = state.newMessageBody;

    let onSendMessageClick = () => {
        dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageBodyActionCreator(e.target.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessagesBody} onChange={onNewMessageChange}
                                  placeholder='Enter your message!'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;