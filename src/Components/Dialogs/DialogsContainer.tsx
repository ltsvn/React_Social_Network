import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType, StoreType} from "../../Redux/Store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/Dialogs-Reducer";
import Dialogs from "./Dialogs";
import * as events from "events";
import StoreContext from "../../StoreContext";

export type messageType = {
    message: string
}

type DialogsType = {
    state: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const DialogsContainer: React.FC<DialogsType> = ({dispatch}) => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    dispatch(sendMessageActionCreator())
                }
                let onNewMessageChange = (body) => {
                    dispatch(updateNewMessageBodyActionCreator(body))
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange} SendMessage={onSendMessageClick}
                         dialogsPage={state}/>
            }
        }</StoreContext.Consumer>
            )
            }

            export default DialogsContainer;