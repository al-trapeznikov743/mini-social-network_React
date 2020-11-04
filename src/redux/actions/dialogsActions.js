import {
    SEND_MESSAGE,
    UPDATE_NEW_MESSAGE
} from '../types'

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        text:text
    }
}