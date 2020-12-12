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
export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))

        const data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    }
}

export const getNextPage = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))

        const data = await usersAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    }
}

export const changeFollow = (userId, followed) => {
    
    const define = defineSubscription(followed)

    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        const response = await define.apiMethod(userId)
        if(response.data.resultCode === 0) {
            dispatch(define.actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

const defineSubscription = (followed) => {
    if (followed) {
        return {
            apiMethod: usersAPI.unfollow.bind(usersAPI),
            actionCreator: unfollow
        }
    }
    return {
        apiMethod: usersAPI.follow.bind(usersAPI),
        actionCreator: follow
    }
}


/* export const getUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
} */