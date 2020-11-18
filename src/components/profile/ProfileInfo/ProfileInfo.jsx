import React from 'react'
import Preloader from '../../common/preloader/Preloader'
import styles from './ProfileInfo.module.sass'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return  <div>
                <div className={styles.head}></div>
                <div className={styles.description}>
                    <img src={props.profile.photos.large} alt='pp'/> + description
                </div>
            </div>
}

export default ProfileInfo