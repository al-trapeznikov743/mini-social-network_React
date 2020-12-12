import {stopSubmit} from "redux-form"
import {authAPI, securityAPI} from "../../api/api"
import {GET_CAPTCHA_URL_SUCCESS, SET_USER_DATA} from "../types"

const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}
const getCaptchaUrlSuccess = (captchaURL) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {captchaURL}
    }
}

// redux-thunk
export const getAuthUserData = () => {
    return async (dispatch) => {
        const response = await authAPI.me()
        if(response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (email, password, remember, captcha) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, remember, captcha)
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if(response.data.resultCode === 10) {
                dispatch(getCaptchaURL())
            }
            const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout()
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export const getCaptchaURL = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaURL()
        const captchaURL = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaURL))
    }
}