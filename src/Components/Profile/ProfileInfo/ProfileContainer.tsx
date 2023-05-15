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

//   [widthAuthRedirect] (redirect logic) -> <ProfileContainer/> (методы жизненного цикла ) ->  <Profile />

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || String(this.props.myId)
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
    myId: number
    status: string
}

type mapDispatchToPropsType = {
    //setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    myId: state.auth.id,
    status: state.profilePage.status
});

export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)