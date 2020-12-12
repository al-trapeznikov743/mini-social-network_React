const {addPost, deletePost} = require("../../actions/profileActions");
const {profileReducer} = require("../profileReducer");

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 9}
    ]
}

test('length of posts should be incremented', () => {
    const action = addPost('add post test')
    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

test('message of new post should be correct', () => {
    const action = addPost('add post test')
    const newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('add post test')
})

test('after removal length of array should be increment', () => {
    const action = deletePost(1)
    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})