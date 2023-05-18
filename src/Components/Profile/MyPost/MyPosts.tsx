import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PostType = {
    id: number
    message: string
    likesCount: number
}
type MyPostsType = {
    posts: PostType[]
    newPostText: string
    addPost: (postText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = (values:any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddMyPostsFormRedux onSubmit={onAddPost}/>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type FormDataType = {
    newPostText: string
}

const AddMyPostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component='textarea'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddMyPostsFormRedux = reduxForm<FormDataType>({form: 'newPostText'})(AddMyPostsForm)

export default MyPosts;
















