import React from "react";
import Profile from "../Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {getUserProfile, ProfileType} from "../../../Redux/Profile-Reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";



type PathParamsType = {
    userId:string,
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

//   [widthAuthRedirect] (redirect logic) -> <ProfileContainer/> (методы жизненного цикла ) ->  <Profile />

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || String(this.props.myId)
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

type mapStateToPropsType = {
    profile: ProfileType | null
    myId: number
}

type mapDispatchToPropsType = {
    //setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string)=>void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    myId: state.auth.id
});

// @ts-ignore
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));