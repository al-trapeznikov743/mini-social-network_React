import {
    ADD_POST,
    UPDATE_NEW_POST
} from '../types'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 9}
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            const newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            const newState = {...state}
            newState.posts = [...state.posts]
            newState.posts.push(newPost)
            newState.newPostText = ''
            return newState
        }
        case UPDATE_NEW_POST: {
            const newState = {...state}
            newState.newPostText = action.text
            return newState
        }
        default: return state
    }
}