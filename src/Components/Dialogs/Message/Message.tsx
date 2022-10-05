import React from "react";
import s from './../Dialogs.module.css'
import stateTS from "../../../Redux/Store";


export type messageType = {
    message: string

}

const Message = (props:messageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;