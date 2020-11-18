import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Profile from './Profile'
import {getUserProfile} from '../../redux/actions/profileActions'

class ProfileContainer extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) {
            return <Redirect to='/login' />
        }
        return  <Profile {...this.props} /> // + profile={this.props.profile}
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithURLDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainer)