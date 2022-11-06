import React from "react";
import Header from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if(response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data.login);
            }
        })
    }

    render() {
    return <Header {...this.props} />
}}

export type AuthPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

type mapDispatchToPropsType = {
    setAuthUserData: (data: {id: number, email: string, login: string}) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

