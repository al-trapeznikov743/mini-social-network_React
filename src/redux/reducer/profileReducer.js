import {
    ADD_POST,
    DELETE_POST,
    SET_AVA_SUCCESS,
    SET_STATUS,
    SET_USER_PROFILE
} from '../types'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 9}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            const newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_AVA_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default: return state
    }
}