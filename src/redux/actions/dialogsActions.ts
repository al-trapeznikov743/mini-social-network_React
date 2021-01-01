import {
    SEND_MESSAGE
} from '../types'

// Actions
//---------------------------------------------------
// sendMessageActionCreator
// type
type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    messageBody: string
}
// action
export const sendMessage = (messageBody: string): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
        messageBody
    }
}