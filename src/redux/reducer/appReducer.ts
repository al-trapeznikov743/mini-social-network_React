import {INITIALIZED_SUCCESS} from '../types'

type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: return state
    }
}