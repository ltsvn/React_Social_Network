import {ActionsTypes} from "./Store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type ProfileType = {
        aboutMe: string,
        contacts: {
            facebook: string,
            website: null,
            vk: string,
            twitter: string,
            instagram: string,
            youtube: null,
            github: string,
            mainLink: null
        },
        lookingForAJob: boolean,
        lookingForAJobDescription: string,
        fullName: string,
        userId: number,
        photos: {
            small: string,
            large: string
        }
}


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
    newPostText: "New Post!",
    profile: null,
    status: '',

}

export type  initialStateType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType | null
    status: string
}

export type ProfileReducerAT = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile> |ReturnType<typeof setStatus>

const profileReducer = (state: initialStateType = initialState, action: ProfileReducerAT): initialStateType => {
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
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
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
export const setUserProfile = (profile: ProfileType) =>
    ({
        type: SET_USER_PROFILE,
        profile
    }) as const

export const setStatus = (status:string) =>
    ({
        type: SET_STATUS,
        status
    }) as const

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
     usersAPI.getProfile(userId).then(response => {
       dispatch(setUserProfile(response.data))
    })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
       dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
    });
}


export default profileReducer;