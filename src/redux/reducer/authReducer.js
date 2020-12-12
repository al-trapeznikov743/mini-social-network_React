import {GET_CAPTCHA_URL_SUCCESS, SET_USER_DATA} from '../types'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: null,
    captchaURL: null
}

export const authReducer = (state = initialState, action) => {
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