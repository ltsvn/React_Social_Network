import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../State/StateTS";

type ProfileType = {
    state: ProfilePageType
}

const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile