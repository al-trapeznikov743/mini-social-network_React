import { AppStateType } from './../reduxStore';
import {ThunkAction} from "redux-thunk"
import {INITIALIZED_SUCCESS} from "../types"
import {getAuthUserData} from "./authActions"

// Actions
// -------------------------------------
export type AppActionType = InitializedSuccessActionType
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
type AppThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AppActionType>
// ------------------------------------------------
// норм типизировать thunk-у
export const initializeApp = (): AppThunkType => {
    // @ts-ignore
    return (dispatch) => {
        let successPromise = dispatch(getAuthUserData())
        successPromise.then(() => {
            dispatch(initializedSuccess())
        })
    }
}