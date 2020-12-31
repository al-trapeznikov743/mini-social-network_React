import {INITIALIZED_SUCCESS} from "../types"
import {getAuthUserData} from "./authActions"

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}
// redux-thunk
export const initializeApp = () => {
    return (dispatch) => {
        let successPromise = dispatch(getAuthUserData())
        successPromise.then(() => {
            dispatch(initializedSuccess())
        })
    }
}