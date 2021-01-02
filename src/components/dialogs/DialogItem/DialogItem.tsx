import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './../Dialogs.module.sass'

type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return  <div className={styles.dialog + ' ' + styles.active}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
}

export default DialogItem