import React from "react";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../Redux/Store";
import MyPostsContainer from "./MyPost/MyPostsContainer";

type ProfileType = {
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}


const Profile = (props: ProfileType) => (
    <div>
        <ProfileInfo/>
        <MyPostsContainer
            // posts={props.profilePage.posts}
            //      newPostText={props.profilePage.newPostText}
            //      dispatch={props.dispatch}
        store={props.store}/>
    </div>
)


export default Profile