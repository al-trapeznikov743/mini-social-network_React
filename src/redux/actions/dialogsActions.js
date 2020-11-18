import {
    SEND_MESSAGE,
    UPDATE_NEW_MESSAGE
} from '../types'

export const sendMessage = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateMessage = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        text:text
    }
}