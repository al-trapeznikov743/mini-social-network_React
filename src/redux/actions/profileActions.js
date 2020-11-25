import {profileAPI} from '../../api/api'
import {
    ADD_POST,
    SET_STATUS,
    SET_USER_PROFILE
} from '../types'

export const addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
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

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0)
            dispatch(setStatus(status))
        })
    }
}