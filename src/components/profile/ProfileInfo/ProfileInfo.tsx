import React, {useState} from 'react'
import styles from './ProfileInfo.module.sass'
import Preloader from '../../common/preloader/Preloader'
import ProfileStatus from './profileStatus/ProfileStatus'
import {ProfileData, ProfileDataFormContainer} from './profileData/ProfileData'
import {ProfileType} from '../../../redux/reducer/profileReducer'


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateProfile: (profile: ProfileType) => void
    updateStatus: (status: string) => void
    updateAvatar: (file: any) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const profilePhoto = 'https://static.mk.ru/upload/entities/2020/11/05/12/articles/detailPicture/ce/c5/72/0a/9646efae17d2f96acb2a10b5d02f7377.jpg'

    // типизировать event
    const changeMainPhoto = (e: any) => {
        if (e.target.files.length) {
            props.updateAvatar(e.target.files[0])
        }
    }

    // типизировать formData and then
    const onSubmit = (formData: any) => {
        // @ts-ignore
        props.updateProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return  <div>
                <div className={styles.head}></div>
                <div className={styles.description}>
                    <img className={styles.ava} src={props.profile.photos.large || profilePhoto} alt='pp'/> + description
                    {props.isOwner && <input type='file' onChange={changeMainPhoto} />}
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    {editMode
                        ? <ProfileDataFormContainer
                            initialValues={props.profile}
                            onSubmit={onSubmit}
                            // типизировать передаваемые props-ы
                            // @ts-ignore
                            profile={props.profile}/>
                        : <ProfileData
                            profile={props.profile}
                            toggleEditMode={() => {setEditMode(true)}}
                            isOwner={props.isOwner} />}
                </div>
            </div>
}

export default ProfileInfo