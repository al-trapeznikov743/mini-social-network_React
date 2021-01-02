import {AuthActionType} from './../actions/authActions'
import {GET_CAPTCHA_URL_SUCCESS, SET_USER_DATA} from '../types'

// types
type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean | null
    captchaURL: string | null
}
//---------------------------------

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: null,
    captchaURL: null
}

export const authReducer = (state = initialState, action: AuthActionType): InitialStateType => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
        {
            return {
                ...state,
                ...action.payload
            }
        }
        default: return state
    }
}