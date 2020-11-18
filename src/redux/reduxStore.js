import {applyMiddleware, combineReducers, createStore} from 'redux'
import {dialogsReducer} from './reducer/dialogsReducer'
import {profileReducer} from './reducer/profileReducer'
import {usersReducer} from './reducer/usersReducer'
import {authReducer} from './reducer/authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store