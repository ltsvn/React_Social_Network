import React from "react";
import {sendMessageActionCreator} from "../../Redux/Dialogs-Reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {initialStateType} from "../../Redux/Dialogs-Reducer";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type mapStateToPropsType = {
    dialogsPage: initialStateType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    sendMessage: (newMessagesBody: string) => void
}

export type DialogPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessagesBody) => {
            dispatch(sendMessageActionCreator(newMessagesBody))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)