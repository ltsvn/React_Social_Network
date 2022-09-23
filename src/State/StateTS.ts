export type StoreType = {
    _state: RootStateType
    _callSubscriber: ()=>void

    getState: ()=>RootStateType
    subscribe: (observer: () => void)=>void

    addPost: (postText: string)=>void
    updateNewPostText: (newText: string)=>void
    dispatch:()=> void
}

let store: StoreType = {
    _state:  {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It is my first post!', likesCount: 23}
            ],
            newPostText: "New Post!"

        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Tolya'},
                {id: 5, name: 'Sasha'},
                {id: 6, name: 'Viktor'},
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Fine'},
                {id: 4, message: 'T'},
                {id: 5, message: 'Sa'},
                {id: 6, message: 'V'},
            ]
        },
        sidebar: {}
    },
    _callSubscriber () {} ,//method

    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    addPost (postText: string)  {
        let newPost: PostType = {
            id: 5,
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText (newText: string)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
}


type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}
type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export default store;
