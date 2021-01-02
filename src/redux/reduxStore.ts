import {applyMiddleware, combineReducers, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './reducer/appReducer'
import {dialogsReducer} from './reducer/dialogsReducer'
import {profileReducer} from './reducer/profileReducer'
import {usersReducer} from './reducer/usersReducer'
import {authReducer} from './reducer/authReducer'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

/* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))) */

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// window.store = store

export default store