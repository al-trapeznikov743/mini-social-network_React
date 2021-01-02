import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {PostType} from '../../../redux/reducer/profileReducer'
import {maxLengthCreator, required} from '../../../utils/validators/validators'
import {Textarea} from '../../common/formControls/FormControls'
import styles from './MyPosts.module.sass'
import Post from './post/Post'


type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = React.memo((props) => {

    let postsElements = props.posts.map(
        post => <Post
                    message={post.message}
                    likesCount={post.likesCount}
                    key={post.id}/>
    )

    // типизировать value
    const onAddPost = (value: any) => {
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


type NewPostFormPropsType = {
    handleSubmit: any
}

const NewPostForm: React.FC<NewPostFormPropsType> = (props) => {
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