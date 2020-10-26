import React from 'react'
import styles from './ProfileInfo.module.sass'

const ProfileInfo = () => {
    return  <div>
                <div className={styles.head}></div>
                <div className={styles.description}>
                    ava + description
                </div>
            </div>
}

export default ProfileInfo