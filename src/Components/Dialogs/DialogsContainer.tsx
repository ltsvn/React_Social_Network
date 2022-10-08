import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/Dialogs-Reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {initialStateType} from "../../Redux/Profile-Reducer";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    dialogsPage: initialStateType
}
type mapDispatchToPropsType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        dialogsPage: state.dialogsPage
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