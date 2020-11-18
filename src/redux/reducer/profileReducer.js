import {
    ADD_POST,
    SET_USER_PROFILE,
    UPDATE_NEW_POST
} from '../types'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 9}
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case ADD_POST: {
            const newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default: return state
    }
}