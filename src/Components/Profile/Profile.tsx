import React, {useEffect} from "react";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../Redux/Store";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import {getUserProfile, ProfileType} from "../../Redux/Profile-Reducer";

export type ProfilePropsType = {
    profile: ProfileType | null
    history: any
    location: any
    match: any
    getUserProfile: (userId: string) => void
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} history={props.history} location={props.location} match={props.match}
                         getUserProfile={getUserProfile} updateStatus={props.updateStatus} status={props.status}/>
            <MyPostsContainer/>
        </div>
    );
}


export default Profile