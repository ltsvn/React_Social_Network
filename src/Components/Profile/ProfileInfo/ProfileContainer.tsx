import React from "react";
import Profile from "../Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../../Redux/Profile-Reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string,
}

export type ProfileContainerPropsType =
    mapStateToPropsType
    & mapDispatchToPropsType
    & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || String(this.props.authorizedUserId)
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
    authorizedUserId: null
    status: string
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.id,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
});

export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)