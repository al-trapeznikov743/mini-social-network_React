import React, {useState} from 'react'
import {connect} from 'react-redux'
import styles from './ProfileInfo.module.sass'
import Preloader from '../../common/preloader/Preloader'
import ProfileStatus from './profileStatus/ProfileStatus'
import {ProfileData, ProfileDataFormContainer} from './profileData/ProfileData'
import {updateProfile} from '../../../redux/actions/profileActions'

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const profilePhoto = 'https://static.mk.ru/upload/entities/2020/11/05/12/articles/detailPicture/ce/c5/72/0a/9646efae17d2f96acb2a10b5d02f7377.jpg'

    const changeMainPhoto = (e) => {
        if (e.target.files.length) {
            props.updateAvatar(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
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
                            profile={props.profile}/>
                        : <ProfileData
                            profile={props.profile}
                            toggleEditMode={() => {setEditMode(true)}}
                            isOwner={props.isOwner} />}
                </div>
            </div>
}

export default connect(null, {updateProfile})(ProfileInfo)