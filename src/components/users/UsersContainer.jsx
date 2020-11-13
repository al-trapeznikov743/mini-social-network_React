import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
} from '../../redux/actions/usersActions'
import Users from './Users'
import Preloader from '../common/preloader/Preloader'

class UsersAPIComponent extends React.Component {
    // если только "super(props)", constructor можно не писать
    constructor(props) {
        super(props)
        this.photoURL = 'https://static.mk.ru/upload/entities/2020/11/05/12/articles/detailPicture/ce/c5/72/0a/9646efae17d2f96acb2a10b5d02f7377.jpg'
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            console.log('NEW')
        })
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
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
})(UsersAPIComponent)

export default UsersContainer