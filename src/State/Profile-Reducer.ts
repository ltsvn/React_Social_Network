import {PostType} from "./StateTS";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: action.postText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

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