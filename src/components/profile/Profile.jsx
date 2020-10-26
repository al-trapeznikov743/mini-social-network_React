import React from 'react'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Profile.module.sass'

const Profile = (props) => {
    return  <div className ={styles.content}>
                <ProfileInfo />
                <MyPosts posts={props.posts}/>
            </div>
}

export default Profile