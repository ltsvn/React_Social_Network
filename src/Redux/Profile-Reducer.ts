import {ActionsTypes} from "./Store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

 export type PostType = {
    id: number
    message: string
    likesCount: number
}

const initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It is my first post!', likesCount: 23}
    ],
    newPostText: "New Post!"
}

export type  initialStateType = {
    posts: PostType[]
    newPostText: string
}

const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText};
        }
        default:
            return state;
        }
}

export const addPostActionCreator = (postText: string) =>
    ({
        type: ADD_POST,
        postText: postText
    }) as const
export const updateNewPostTextActionCreator = (newText: string) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }) as const

export default profileReducer;