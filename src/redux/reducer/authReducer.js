import {SET_USER_DATA} from '../types'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: return state
    }
}