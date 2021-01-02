import {ProfileActionType} from './../actions/profileActions'
import {
    ADD_POST,
    DELETE_POST,
    SET_AVA_SUCCESS,
    SET_STATUS,
    SET_USER_PROFILE
} from '../types'


export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number
    aboutMe: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: ContactsType
    photos: PhotosType
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 9}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}

type InitialStateType = typeof initialState

export const profileReducer = (state = initialState, action: ProfileActionType): InitialStateType => {
    switch(action.type) {
        case ADD_POST: {
            const newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_AVA_SUCCESS: {
            return {
                ...state,
                // в процессе убрать приведение к типу, в логике такого быть не должно
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default: return state
    }
}