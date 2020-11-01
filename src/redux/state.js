export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST = 'UPDATE_NEW_POST'

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
            messages: [
                {id:1, message: 'Hi'},
                {id:1, message: 'How is your it-kamasutra'},
                {id:1, message: 'Yo'}
            ],
              dialogs: [
                {id: 1, name: 'Dimon'},
                {id: 1, name: 'Sveta'},
                {id: 1, name: 'Kent'},
                {id: 1, name: 'Denchik'}
            ]
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
        if (action.type === 'ADD_POST') {
            this._addPost()
        } else if (action.type === 'UPDATE_NEW_POST') {
            this._updatePostText(action.text)
        }
    },



    _addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updatePostText(text) {
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state)
    },
}

export default store


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        text: text
    }
}

// window.state = this._state