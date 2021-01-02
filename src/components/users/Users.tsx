import React from 'react'
import {NavLink} from 'react-router-dom'
import {UserType} from '../../redux/reducer/usersReducer'
import Paginator from '../common/paginator/Paginator'
import styles from './Users.module.sass'


type UsersPropsType = {
    pageTitle: string
    users: Array<UserType>
    photoURL: string
    followingInProgress: Array<number>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    changeFollow: (userId: number, followed: boolean) => void
    onPageChanged: (pageNumber: number) => void
}


const Users: React.FC<UsersPropsType> = ({
    pageTitle,
    users,
    photoURL,
    followingInProgress,
    totalUsersCount,
    pageSize,
    currentPage,
    changeFollow,
    onPageChanged,
    ...props}) => {

    const usersList = users.map(user => (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={styles.userAva} src={user.photos.small !== null ? user.photos.small : photoURL} alt='user' />
                    </NavLink>
                </div>
                <div>
                    <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            changeFollow(user.id, user.followed)}}
                        >{user.followed ? 'Unfollow' : 'Follow'}</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>
    ))
    return  <div>
                <span>{pageTitle}</span>
                <Paginator
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                />
                {usersList}
        </div>
}

export default Users