import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Profile.module.sass'
import MyPostsContainer from './myPosts/MyPostsContainer'

const Profile = () => {
    return  <div className ={styles.content}>
                <ProfileInfo />
                <MyPostsContainer />
            </div>
}

export default Profile