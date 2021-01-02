import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {
    getUsers,
    getNextPage,
    changeFollow
} from '../../redux/actions/usersActions'
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from '../../redux/selectors/usersSelectors'
import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import {UserType} from '../../redux/reducer/usersReducer'
import {AppStateType} from '../../redux/reduxStore'



type UsersContainerOwnPropsType = {
    pageTitle: string
}
type UsersContainerStatePropsType = {
    users: Array<UserType>
    followingInProgress: Array<number>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
}
type UsersContainerDispatchPropsType = {
    getUsers: (pageNumber: number, pageSize: number) => void
    getNextPage: (pageNumber: number, pageSize: number) => void
    changeFollow: (userId: number, followed: boolean) => void
}

type UsersContainerPropsType = UsersContainerOwnPropsType
    & UsersContainerStatePropsType
    & UsersContainerDispatchPropsType


class UsersContainer extends React.Component<UsersContainerPropsType> {
    photoURL: string
    // если только "super(props)", constructor можно не писать
    constructor(props: any) {
        super(props)
        this.photoURL = 'https://static.mk.ru/upload/entities/2020/11/05/12/articles/detailPicture/ce/c5/72/0a/9646efae17d2f96acb2a10b5d02f7377.jpg'
    }

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {

        this.props.getNextPage(pageNumber, this.props.pageSize)
    }
    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
            <Users
                pageTitle={this.props.pageTitle}
                users={this.props.users}
                photoURL={this.photoURL}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                changeFollow={this.props.changeFollow}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): UsersContainerStatePropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

export default compose(
    connect<
        UsersContainerStatePropsType,
        UsersContainerDispatchPropsType,
        UsersContainerOwnPropsType,
        AppStateType>(mapStateToProps, {getUsers, getNextPage, changeFollow})
)(UsersContainer)