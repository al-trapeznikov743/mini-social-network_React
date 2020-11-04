import {
    ADD_POST,
    UPDATE_NEW_POST
} from '../types'

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        text: text
    }
}