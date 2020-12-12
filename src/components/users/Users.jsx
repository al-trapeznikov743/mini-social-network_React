import React from 'react'
import {NavLink} from 'react-router-dom'
import Paginator from '../common/paginator/Paginator'
import styles from './Users.module.sass'

const Users = (props) => {

    const usersList = props.users.map(user => (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={styles.userAva} src={user.photos.small !== null ? user.photos.small : props.photoURL} alt='user' />
                    </NavLink>
                </div>
                <div>
                    <button
                        disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            props.changeFollow(user.id, user.followed)}}
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
                <Paginator
                    totalItemsCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                />
                {usersList}
        </div>
}

export default Users