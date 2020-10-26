import React from 'react'
import styles from './MyPosts.module.sass'
import Post from './post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    return  <div className={styles.postsBlock}>
                <textarea></textarea>
                <button>Add post</button>
                <div>
                    New post
                </div>
                <div className='content__posts'>
                    {postsElements}
                </div>
            </div>
}

export default MyPosts