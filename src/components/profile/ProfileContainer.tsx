import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {
    getUserProfile,
    getUserStatus,
    updateProfile,
    updateStatus,
    updateAvatar,
    addPost} from '../../redux/actions/profileActions'
import {PostType, ProfileType} from '../../redux/reducer/profileReducer'
import {AppStateType} from '../../redux/reduxStore'
// import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import Profile from './Profile'



type ProfileContainerOwnPropsType = {}
type ProfileContainerStatePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    status: string
    authorizedUserID: number | null
    isAuth: boolean
}
// типизировать updateAvatar
type ProfileContainerDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateProfile: (profile: ProfileType) => void
    updateStatus: (status: string) => void
    updateAvatar: (file: any) => void
    addPost: (newPostText: string) => void
}

type ProfileContainerPropsType = ProfileContainerOwnPropsType
    & ProfileContainerStatePropsType
    & ProfileContainerDispatchPropsType
    & {
        match: any
        history: any
    }

// типизировать withRouter
class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(
        prevProps: ProfileContainerPropsType,
        prevState: any,
        snapshot: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    refreshProfile() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserID
            if(!userId) {
                this.props.history.push('/login')
                // возможно этот return придётся удалить
                return undefined
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return  <Profile {...this.props} isOwner={!this.props.match.params.userId} />
    }
}

const mapStateToProps = (state: AppStateType): ProfileContainerStatePropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        status: state.profilePage.status,
        authorizedUserID: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect<ProfileContainerStatePropsType,
        ProfileContainerDispatchPropsType,
        ProfileContainerOwnPropsType,
        AppStateType>(mapStateToProps,{
            getUserProfile,
            getUserStatus,
            updateProfile,
            updateStatus,
            updateAvatar,
            addPost
        }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)