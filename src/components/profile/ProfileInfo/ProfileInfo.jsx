import React from 'react'
import styles from './ProfileInfo.module.sass'
import Preloader from '../../common/preloader/Preloader'
import ProfileStatus from './profileStatus/ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return  <div>
                <div className={styles.head}></div>
                <div className={styles.description}>
                    <img src={props.profile.photos.large} alt='pp'/> + description
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
}

export default ProfileInfo