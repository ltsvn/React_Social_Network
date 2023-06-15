import profileReducer, {addPostActionCreator, deletePost, initialStateType} from "./Profile-Reducer";
const initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It is my first post!', likesCount: 23}
    ],
    newPostText: "New Post!",
    profile: null,
    status: '',

}
it('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra')

    //2.action
    let newState = profileReducer(initialState, action)

    //3. expectation
    expect(newState.posts.length).toBe(3);
})
it('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra')

    //2.action
    let newState = profileReducer(initialState, action)

    //3. expectation
    expect(newState.posts[2].message).toBe('it-kamasutra');
})

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1)

    //2.action
    let newState = profileReducer(initialState, action)

    //3. expectation
    expect(newState.posts.length).toBe(1);
})
it('after deleting length of messages should not be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(10000)

    //2.action
    let newState = profileReducer(initialState, action)

    //3. expectation
    expect(newState.posts.length).toBe(2);
})