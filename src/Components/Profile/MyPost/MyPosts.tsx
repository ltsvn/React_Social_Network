import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";
import avatar from "../../../assets/images/avatar.png";

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

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props: MyPostsType) => {

    console.log('hello')

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = (values:any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <AddMyPostsFormRedux onSubmit={onAddPost}/>
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
        <form onSubmit={props.handleSubmit} className={s.addPost}>
            <div className={s.avatar}>
                <img src={avatar} alt='profileImg'/>
            </div>
            <div className={s.addPostForm}>
                <Field name='newPostText' component={Textarea} validate={[required, maxLength10]} placeholder={'Post message'} />
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddMyPostsFormRedux = reduxForm<FormDataType>({form: 'newPostText'})(AddMyPostsForm)

export default MyPosts;
















