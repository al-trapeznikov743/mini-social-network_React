import {INITIALIZED_SUCCESS} from "../types"
import {getAuthUserData} from "./authActions"

// Actions
// -------------------------------------
// initializedSuccessActionCreator
// types
type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
// action
export const initializedSuccess = (): InitializedSuccessActionType => {
    return {
        type: INITIALIZED_SUCCESS
    }
}


// Redux-thunk
// -------------------------------------
export const initializeApp = () => {
    return (dispatch: any) => {
        let successPromise = dispatch(getAuthUserData())
        successPromise.then(() => {
            dispatch(initializedSuccess())
        })
    }
}