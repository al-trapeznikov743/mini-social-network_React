import React from 'react'
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
                    <img className={styles.userAva} src={user.photos.small !== null ? user.photos.small : props.photoURL} alt='user' />
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
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