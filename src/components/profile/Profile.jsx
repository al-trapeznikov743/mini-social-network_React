import React from 'react'
import ProfileInfo from './profileInfo/ProfileInfo'
import styles from './Profile.module.sass'
import MyPostsContainer from './myPosts/MyPostsContainer'

const Profile = (props) => {
    return  <div className ={styles.content}>
                <ProfileInfo
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner}
                    updateAvatar={props.updateAvatar}
                />
                <MyPostsContainer />
            </div>
}

export default Profile