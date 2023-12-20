import Navbar from "./Navbar";
import React from "react";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

class NavbarContainer extends React.Component<AuthPropsType> {

    render() {
        return <Navbar {...this.props} />
}}

export type AuthPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
    login: null
}

type mapDispatchToPropsType = {
    setAuthUserData: (id: null, email: null, login: null, isAuth:boolean) => void
    logout: ()=> void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

});

export default connect(mapStateToProps,{logout})(NavbarContainer);