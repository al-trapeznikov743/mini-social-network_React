import React from 'react'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Profile.module.sass'

const Profile = (props) => {
    return  <div className ={styles.content}>
                <ProfileInfo />
                <MyPosts
                    posts={props.state.posts}
                    newPostText={props.state.newPostText}
                    dispatch={props.dispatch}
                />
            </div>
}

export default Profile