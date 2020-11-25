import {connect} from 'react-redux'
import {addPost} from '../../../redux/actions/profileActions'
import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

export default connect(mapStateToProps, {addPost})(MyPosts)