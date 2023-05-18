import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPropsType} from "./DialogsContainer";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props: DialogPropsType) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessagesBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>

    )
}

export default Dialogs;