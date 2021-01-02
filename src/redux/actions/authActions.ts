import {AppStateType} from './../reduxStore'
import {stopSubmit} from 'redux-form'
import {ThunkAction} from 'redux-thunk'
import {authAPI, securityAPI} from '../../api/api'
import {GET_CAPTCHA_URL_SUCCESS, SET_USER_DATA} from '../types'


// Actions
//------------------------------------
export type AuthActionType =
    SetAuthUserDataActionType |
    getCaptchaUrlSuccessActionType

// setAuthUserDataActionCreator
// types
type SetAuthUserDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataPayloadType
}
// action
const setAuthUserData = (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean): SetAuthUserDataActionType => {
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

// getCaptchaUrlSuccessActionCreator
// types
type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {captchaURL: string}
}
// action
const getCaptchaUrlSuccess = (captchaURL: string): getCaptchaUrlSuccessActionType => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {captchaURL}
    }
}


// Redux-thunk
type AuthThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AuthActionType>
//--------------------------------------------------
export const getAuthUserData = (): AuthThunkType => {
    return async (dispatch) => {
        const response = await authAPI.me()
        if(response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (
    email: string,
    password: string,
    remember: boolean,
    captcha: string | null): AuthThunkType => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, remember, captcha)
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if(response.data.resultCode === 10) {
                dispatch(getCaptchaURL())
            }
            const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            // типизировать stopSubmit()
            // @ts-ignore
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
    }
}
export const logout = (): AuthThunkType => {
    return async (dispatch) => {
        const response = await authAPI.logout()
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export const getCaptchaURL = (): AuthThunkType => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaURL()
        const captchaURL = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaURL))
    }
}