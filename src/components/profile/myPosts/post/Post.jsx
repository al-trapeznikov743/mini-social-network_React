import React from 'react'
import classes from './Post.module.sass'

const Post = () => {
    return  <div className={classes.item}>
                <img 
                    src='https://sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg' 
                    alt='avatar'
                    className={classes.img}
                    />
                Post1
                <span>like</span>
            </div>
}

export default Post