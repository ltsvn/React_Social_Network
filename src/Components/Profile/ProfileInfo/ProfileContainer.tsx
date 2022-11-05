import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {initialStateType, UserType} from "../../../Redux/Users-Reducer";
import {ProfileType, setUserProfile} from "../../../Redux/Profile-Reducer";
import {UsersTypeFunc} from "../../Users/Users";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId:string,
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);