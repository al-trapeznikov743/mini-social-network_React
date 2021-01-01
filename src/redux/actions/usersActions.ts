import {UserType} from './../reducer/usersReducer'
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


// Actions
//----------------------------------------
// followActionCreator
// type
type FollowActonType = {
    type: typeof FOLLOW
    id: number
}
// action
const follow = (userId: number): FollowActonType => {
    return {
        type: FOLLOW,
        id: userId
    }
}

// unfollowActionCreator
// type
type UnfollowActionType = {
    type: typeof UNFOLLOW
    id: number
}
// action
const unfollow = (userId: number): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        id: userId
    }
}

// setUsersActionCreator
// type
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
// action
const setUsers = (users: Array<UserType>): SetUsersActionType => {
    return {
        type: SET_USERS,
        users
    }
}

// setCurrentPageActionCreator
// type
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}
// action
const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber
    }
}

// setUsersTotalCountActionCreator
// type
type SetUsersTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
// action
const setUsersTotalCount = (totalCount: number): SetUsersTotalCountActionType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
}

// toggleIsFetchingActionCreator
// type
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
// action
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

// toggleFollowingProgressActionCreator
// type
type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING
    isFetching: boolean
    userId: number
}
// action
const toggleFollowingProgress = (
    isFetching: boolean,
    userId: number): ToggleFollowingProgressActionType => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFetching,
        userId
    }
}

// Redux-thunk
//---------------------------------------------------
export const getUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))

        const data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    }
}

export const getNextPage = (pageNumber: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))

        const data = await usersAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    }
}

export const changeFollow = (userId: number, followed: boolean) => {
    
    const define = defineSubscription(followed)

    return async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        const response = await define.apiMethod(userId)
        if(response.data.resultCode === 0) {
            dispatch(define.actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

const defineSubscription = (followed: boolean) => {
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