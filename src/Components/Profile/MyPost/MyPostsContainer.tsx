import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {ActionsTypes, PostType, StoreType} from "../../../Redux/Store";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/Profile-Reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


type MyPostsType = {
    // posts: PostType[]
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const MyPostsContainer = (props: MyPostsType) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator(props.newPostText));
                }

                let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(updateNewPostTextActionCreator(e.currentTarget.value));
                }
                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
















