import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../State/StateTS";

export type messageType = {
    message: string
}

type DialogsType = {
    state:DialogsPageType
}

const Dialogs:React.FC<DialogsType>= ({state}) => {
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messagesElements = state.messagesData.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;