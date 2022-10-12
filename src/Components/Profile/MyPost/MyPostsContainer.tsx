import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {ActionsTypes, StoreType} from "../../../Redux/Store";
import {
    updateNewPostTextActionCreator,
    addPostActionCreator,
    initialStateType,
    PostType
} from "../../../Redux/Profile-Reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type MyPostsType = {
    //posts: PostType[]
    //newPostText: string
    // dispatch: (action: ActionsTypes) => void
    //store: StoreType
}
export type mapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}

export type mapDispatchToPropsType = {
    updateNewPostText: ( value: string)  => void
    addPost: (postText: string) => void
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        updateNewPostText: ( value: string) => {
            dispatch(updateNewPostTextActionCreator(value))
        },
        addPost: (postText: string) => {
            dispatch(addPostActionCreator(postText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
















