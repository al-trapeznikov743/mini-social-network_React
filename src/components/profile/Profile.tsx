import React from 'react'
import ProfileInfo from './profileInfo/ProfileInfo'
import styles from './Profile.module.sass'
import MyPosts from './myPosts/MyPosts'
import {PostType, ProfileType} from '../../redux/reducer/profileReducer'


type ProfilePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    status: string
    isOwner: boolean
    addPost: (newPostText: string) => void
    updateProfile: (profile: ProfileType) => void
    updateStatus: (status: string) => void
    updateAvatar: (file: any) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return  <div className ={styles.content}>
                <ProfileInfo
                    profile={props.profile}
                    status={props.status}
                    isOwner={props.isOwner}
                    updateProfile={props.updateProfile}
                    updateStatus={props.updateStatus}
                    updateAvatar={props.updateAvatar}
                />
                <MyPosts
                    posts={props.posts}
                    addPost={props.addPost}
                />
            </div>
}

export default Profile