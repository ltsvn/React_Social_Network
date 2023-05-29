import React from "react";
import Header from "./Header";
import axios from "axios";
import {getAuthUserData, logout, setAuthUserData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";



class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
    return <Header {...this.props} />
}}

export type AuthPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
    login: null
}

type mapDispatchToPropsType = {
    setAuthUserData: (id: null, email: null, login: null, isAuth:boolean) => void
    getAuthUserData: ()=>void
    logout: ()=> void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);

