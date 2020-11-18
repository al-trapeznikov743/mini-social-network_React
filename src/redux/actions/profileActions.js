import {profileAPI} from '../../api/api'
import {
    ADD_POST,
    SET_USER_PROFILE,
    UPDATE_NEW_POST
} from '../types'

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        text: text
    }
}

const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

// redux-thunk
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}