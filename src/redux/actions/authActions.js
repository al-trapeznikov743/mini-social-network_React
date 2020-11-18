import {authAPI} from "../../api/api"
import {SET_USER_DATA} from "../types"

const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
}

// redux-thunk
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if(response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}