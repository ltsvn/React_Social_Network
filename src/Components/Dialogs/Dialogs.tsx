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

const Dialogs: React.FC<DialogsType> = (props) => {
     //let state = props.dialogsPage;
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.state.message.map(m => <Message message={m.message} key={m.id}/>)
   let newMessagesBody = props.state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
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