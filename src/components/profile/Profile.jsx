import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Profile.module.sass'
import MyPostsContainer from './myPosts/MyPostsContainer'

const Profile = (props) => {
    return  <div className ={styles.content}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer />
            </div>
}

export default Profile