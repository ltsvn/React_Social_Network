import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import { ProfileType } from "../../Redux/Profile-Reducer";
import s from './Profile.module.css'

export type ProfilePropsType = {
    profile: ProfileType | null
    history: any
    location: any
    match: any
    getUserProfile: (userId: string) => void
    status: string
    updateStatus: (status: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, history, location , match, children, getUserProfile, updateStatus}) => {

    return (
        <div className={s.profilePage}>
            <ProfileInfo profile={profile} history={history} location={location} match={match}
                         getUserProfile={getUserProfile} updateStatus={updateStatus} status={status}/>
            <MyPostsContainer/>
        </div>
    );
}


export default Profile