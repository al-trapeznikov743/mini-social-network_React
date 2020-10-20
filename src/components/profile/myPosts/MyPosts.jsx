import React from 'react'
// import classes from './MyPosts.module.sass'
import Post from './post/Post'

const MyPosts = () => {
    return  <div>
                <textarea></textarea>
                <button>Add post</button>
                <div>
                    New post
                </div>
                <div className='content__posts'>
                    <Post />
                </div>
            </div>
}

export default MyPosts