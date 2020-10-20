import React from 'react'
import MyPosts from './myPosts/MyPosts'
import classes from './Profile.module.sass'

const Profile = () => {
    return  <div className ={classes.content}>
                <div className={classes.head}></div>
                <div>
                    ava + description
                </div>
                <MyPosts />
            </div>
}

export default Profile