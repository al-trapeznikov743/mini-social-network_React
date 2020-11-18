import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING,
    UNFOLLOW
} from '../types'

import {usersAPI} from '../../api/api'


const follow = (userId) => {
    return {
        type: FOLLOW,
        id: userId
    }
}
const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        id: userId
    }
}
const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber
    }
}
const setUsersTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
}
const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFetching,
        userId
    }
}

// redux-thunk
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}

export const getNextPage = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))

        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
    }
}

export const changeFollow = (userId, followed) => {
    if (followed) {
        return (dispatch) => {
            dispatch(toggleFollowingProgress(true, userId))
            usersAPI.unfollow(userId).then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
        }
    }
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
                dispatch(toggleFollowingProgress(false, userId))
        })
    }
}