import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

type dialogsItems = {
    id:string
    name: string
}

type messageType = {
    message: string
}

const DialogItem = (props:dialogsItems) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to='path'>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:messageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Tolya' id='4'/>
                <DialogItem name='Sasha' id='5'/>
                <DialogItem name='Viktor' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='How are you?'/>
                <Message message='Fine'/>
            </div>
        </div>

    )
}

export default Dialogs;