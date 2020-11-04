import {combineReducers, createStore} from 'redux'
import {dialogsReducer} from './reducer/dialogsReducer'
import {profileReducer} from './reducer/profileReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

const store = createStore(reducers)

window.store = store

export default store