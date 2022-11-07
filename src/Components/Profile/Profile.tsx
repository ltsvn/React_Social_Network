import React from "react";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../Redux/Store";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import {ProfilePropsType} from "./ProfileInfo/ProfileContainer";
import {getUserProfile} from "../../Redux/Profile-Reducer";


const Profile = (props: ProfilePropsType) => (
    <div>
        <ProfileInfo profile={props.profile}  history={props.history} location={props.location} match={props.match} getUserProfile={getUserProfile}/>
        <MyPostsContainer/>
    </div>
)


export default Profile