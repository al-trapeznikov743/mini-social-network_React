import React from 'react'
import styles from './MyPosts.module.sass'
import Post from './post/Post'
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/state'


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElem = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElem.current.value
        props.dispatch(updatePostTextActionCreator(text))
    }
    return  <div className={styles.postsBlock}>
                <textarea onChange={onPostChange} ref={newPostElem} value={props.newPostText}></textarea>
                <button onClick={addPost}>Add post</button>
                <div>
                    New post
                </div>
                <div className='content__posts'>
                    {postsElements}
                </div>
            </div>
}

export default MyPosts