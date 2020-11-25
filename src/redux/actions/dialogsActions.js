import {
    SEND_MESSAGE
} from '../types'

export const sendMessage = (messageBody) => {
    return {
        type: SEND_MESSAGE,
        messageBody
    }
}