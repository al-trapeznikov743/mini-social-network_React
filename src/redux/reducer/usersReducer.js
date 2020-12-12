import {updateObjectInArray} from '../../utils/helpers/objectHelpers'
import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING,
    UNFOLLOW
} from '../types'


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: return state
    }
}