import {stopSubmit} from "redux-form"
import {authAPI} from "../../api/api"
import {SET_USER_DATA} from "../types"

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

// redux-thunk
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if(response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email, password, remember) => {
    return (dispatch) => {
        authAPI.login(email, password, remember).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}