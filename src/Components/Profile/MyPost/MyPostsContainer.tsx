import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {ActionsTypes, PostType, StoreType} from "../../../Redux/Store";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/Profile-Reducer";
import MyPosts from "./MyPosts";



type MyPostsType = {
    // posts: PostType[]
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const MyPostsContainer  = (props: MyPostsType) => {

let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator(props.newPostText));
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostText(e.currentTarget.value)
        props.store.dispatch(updateNewPostTextActionCreator(e.currentTarget.value));
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;
















