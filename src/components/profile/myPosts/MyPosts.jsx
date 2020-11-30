import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../../utils/validators/validators'
import {Textarea} from '../../common/formControls/FormControls'
import styles from './MyPosts.module.sass'
import Post from './post/Post'


const MyPosts = React.memo((props) => {

    console.log('RENDER MyPosts')

    let postsElements = props.posts.map(
        post => <Post
                    message={post.message}
                    likesCount={post.likesCount}
                    key={post.id}/>
    )

    const onAddPost = (value) => {
        props.addPost(value.newPostText)
    }

    return  <div className={styles.postsBlock}>
                <NewPostReduxForm onSubmit={onAddPost} />
                <div>
                    New post
                </div>
                <div className='content__posts'>
                    {postsElements}
                </div>
            </div>
})


const maxLength = maxLengthCreator(50)

const NewPostForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    placeholder={'what do you want to say'}
                    validate={[required, maxLength]}
                />
                <button>add post</button>
            </form>
}

const NewPostReduxForm = reduxForm({form: 'profileNewPost'})(NewPostForm)

export default MyPosts