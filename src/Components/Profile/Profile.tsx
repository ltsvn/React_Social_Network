import React from "react";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../Redux/Store";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import {ProfilePropsType} from "./ProfileInfo/ProfileContainer";


const Profile = (props: ProfilePropsType) => (
    <div>
        <ProfileInfo profile={props.profile} setUserProfile={props.setUserProfile}/>
        <MyPostsContainer/>
    </div>
)


export default Profile