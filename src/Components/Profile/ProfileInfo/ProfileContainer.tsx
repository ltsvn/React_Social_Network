import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {initialStateType, UserType} from "../../../Redux/Users-Reducer";
import {ProfileType, setUserProfile} from "../../../Redux/Profile-Reducer";
import {UsersTypeFunc} from "../../Users/Users";

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2 `).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
});


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);