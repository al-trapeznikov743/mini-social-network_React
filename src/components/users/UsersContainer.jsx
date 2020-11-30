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

class UsersContainer extends React.Component {
    // если только "super(props)", constructor можно не писать
    constructor(props) {
        super(props)
        this.photoURL = 'https://static.mk.ru/upload/entities/2020/11/05/12/articles/detailPicture/ce/c5/72/0a/9646efae17d2f96acb2a10b5d02f7377.jpg'
    }

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {

        this.props.getNextPage(pageNumber, this.props.pageSize)
    }
    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
            <Users
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

const mapStateToProps = (state) => {
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
    connect(mapStateToProps, {
        getUsers,
        getNextPage,
        changeFollow
    })
)(UsersContainer)

/* const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
} */