import React from 'react'
import styles from './Post.module.sass'

const Post = React.memo((props) => {
    return  <div className={styles.item}>
                <img 
                    src='https://sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg' 
                    alt='avatar'
                    className={styles.img}
                    />
                {props.message}
                <span>{props.likesCount}</span>
            </div>
})

export default Post