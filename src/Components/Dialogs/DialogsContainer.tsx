import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/Dialogs-Reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {initialStateType} from "../../Redux/Dialogs-Reducer";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    dialogsPage: initialStateType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}

export type DialogPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return{
        updateNewMessageBody: (body: string)=>{
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageActionCreator())
        }
    }
}

const  DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;