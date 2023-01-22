import React from "react";
import Profile from "../Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {getUserProfile, ProfileType} from "../../../Redux/Profile-Reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";



type PathParamsType = {
    userId:string,
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || String(this.props.myId)
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return  <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
    myId: number
}

type mapDispatchToPropsType = {
    //setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string)=>void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    myId: state.auth.id
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);