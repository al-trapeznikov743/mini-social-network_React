import {
    SEND_MESSAGE
} from '../types'

// Actions
//---------------------------------------------------
export type DialogsActionType = SendMessageActionType
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