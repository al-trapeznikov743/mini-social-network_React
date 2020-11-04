import {dialogsReducer} from './reducer/dialogsReducer'
import {profileReducer} from './reducer/profileReducer'


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 9}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('State changed')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }

}

export default store

// window.state = this._state