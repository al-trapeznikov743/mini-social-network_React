import {
    SEND_MESSAGE,
    UPDATE_NEW_MESSAGE
} from '../types'

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimon'},
        {id: 1, name: 'Sveta'},
        {id: 1, name: 'Kent'},
        {id: 1, name: 'Denchik'}
    ],
    messages: [
        {id:1, message: 'Hi'},
        {id:1, message: 'How is your it-kamasutra'},
        {id:1, message: 'Yo'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE: {
            const newState = {...state}
            newState.newMessageText = action.text
            return newState
        }
        case SEND_MESSAGE: {
            const newMessage = {
                id: 2,
                message: state.newMessageText
            }
            const newState = {...state}
            newState.messages = [...state.messages]
            newState.messages.push(newMessage)
            newState.newMessageText = ''
            return newState
        }
        default: return state
    }
}