import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType, StoreType} from "../../Redux/Store";
import {mapDispatchToPropsType, mapStateToPropsType} from "../Profile/MyPost/MyPostsContainer";

export type messageType = {
    message: string
}

type DialogsType = {
    updateNewMessageBody:(newMessage: string)=>void
    sendMessage: ()=>void
    messagesData: messageType
    state: DialogsPageType
}

const Dialogs: React.FC<DialogsType> = (props: mapStateToPropsType | mapDispatchToPropsType) => {
     //let state = props.dialogsPage;
    let dialogsElements = props.dialogsData.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesData.message.map(message => <Message message={message.message}/>)
   // let newMessagesBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
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
                        <textarea value={props.messagesData.message} onChange={onNewMessageChange}
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