import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {messageType} from "../../Dialogs/Dialogs";
import {PostType} from "../../../State/StateTS";

type MyPostsType = {
    posts:PostType[]
}

const MyPosts = (props:MyPostsType) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={s.postsBlocksd}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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
















