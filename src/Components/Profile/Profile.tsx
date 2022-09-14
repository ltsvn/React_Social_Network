import React from "react";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {PostType, ProfilePageType} from "../../State/StateTS";

type ProfileType = {
    profilePage: ProfilePageType
    updateNewPostText: (newText: string) => void
    addPostCallBack: () => void
}


const Profile = (props: ProfileType) => (
    <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}
                 addPostCallBack={props.addPostCallBack}/>
    </div>
)


export default Profile