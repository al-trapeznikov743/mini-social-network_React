import {DialogsActionType} from './../actions/dialogsActions'
import {
    SEND_MESSAGE
} from '../types'

// types
export type DialogsInitialStateType = typeof initialState
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
//----------------------------------------------

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Kent'},
        {id: 4, name: 'Denchik'}
    ] as Array<DialogType>,
    messages: [
        {id:1, message: 'Hi'},
        {id:2, message: 'How is your it-kamasutra'},
        {id:3, message: 'Yo'}
    ] as Array<MessageType>
}

export const dialogsReducer = (state = initialState, action: DialogsActionType): DialogsInitialStateType => {
    switch(action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                id: 4,
                message: action.messageBody
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default: return state
    }
}