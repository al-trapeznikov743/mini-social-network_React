import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {getUserProfile, getUserStatus, updateStatus} from '../../redux/actions/profileActions'
// import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount() {
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
        return  <Profile {...this.props} />
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
        updateStatus
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)