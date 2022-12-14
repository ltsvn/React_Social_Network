import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, StoreType} from "../../../Redux/Store";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/Profile-Reducer";
import {text} from "stream/consumers";


type PostType = {
    id: number
    message: string
    likesCount: number
}
type MyPostsType = {
    posts: PostType[]
    newPostText: string
    addPost: (postText: string)=>void
    updateNewPostText: (value: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = () => {
        props.addPost(props.newPostText)
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         props.updateNewPostText(e.currentTarget.value)
        // props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>*/}
                {/*<Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}
            </div>
        </div>
    )
}

export default MyPosts;
















