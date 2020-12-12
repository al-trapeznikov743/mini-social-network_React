import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {getUserProfile, getUserStatus, updateStatus, updateAvatar} from '../../redux/actions/profileActions'
// import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserID: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,{
        getUserProfile,
        getUserStatus,
        updateStatus,
        updateAvatar
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)