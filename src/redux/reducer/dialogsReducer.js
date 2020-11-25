import {
    SEND_MESSAGE
} from '../types'

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Kent'},
        {id: 4, name: 'Denchik'}
    ],
    messages: [
        {id:1, message: 'Hi'},
        {id:2, message: 'How is your it-kamasutra'},
        {id:3, message: 'Yo'}
    ]
}

export const dialogsReducer = (state = initialState, action) => {
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