import React from 'react'
import styles from './../Dialogs.module.sass'

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

export default Message