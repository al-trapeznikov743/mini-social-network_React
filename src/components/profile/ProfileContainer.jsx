import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Profile from './Profile'
import {getUserProfile, getUserStatus, updateStatus} from '../../redux/actions/profileActions'
// import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserID
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return  <Profile {...this.props} /> // + profile={this.props.profile}
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


/* const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const WithURLDataContainer = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainer) */