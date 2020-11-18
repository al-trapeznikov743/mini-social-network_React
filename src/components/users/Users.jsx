import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Users.module.sass'

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)

    const pages = []

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

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
                <div>
                    {pages.map(page => {
                        return <span
                            className={props.currentPage === page ? styles.selectedPage : null}
                            onClick={() => {
                                props.onPageChanged(page)
                            }}
                        >{page}</span>
                    })}
                </div>
                {usersList}
        </div>
}

export default Users