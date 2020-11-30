import {applyMiddleware, combineReducers, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './reducer/appReducer'
import {dialogsReducer} from './reducer/dialogsReducer'
import {profileReducer} from './reducer/profileReducer'
import {usersReducer} from './reducer/usersReducer'
import {authReducer} from './reducer/authReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store