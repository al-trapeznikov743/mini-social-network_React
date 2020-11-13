import {combineReducers, createStore} from 'redux'
import {dialogsReducer} from './reducer/dialogsReducer'
import {profileReducer} from './reducer/profileReducer'
import {usersReducer} from './reducer/usersReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

const store = createStore(reducers)

window.store = store

export default store