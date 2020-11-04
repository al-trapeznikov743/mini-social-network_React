import React from 'react'
import styles from './MyPosts.module.sass'
import Post from './post/Post'


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (event) => {
        let text = event.target.value
        props.updateNewPostText(text)
    }
    return  <div className={styles.postsBlock}>
                <textarea onChange={onPostChange} value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add post</button>
                <div>
                    New post
                </div>
                <div className='content__posts'>
                    {postsElements}
                </div>
            </div>
}

export default MyPosts