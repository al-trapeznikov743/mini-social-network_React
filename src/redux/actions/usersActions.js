import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING,
    UNFOLLOW
} from '../types'

export const follow = (userId) => {
    return {
        type: FOLLOW,
        id: userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        id: userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber
    }
}

export const setUsersTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}