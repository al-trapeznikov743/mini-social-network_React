import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../../redux/actions/authActions'
import {AppStateType} from '../../redux/reduxStore'
import Header from './Header'



type HeaderContainerOwnPropsType = {}
type HeaderContainerStatePropsType = {
    isAuth: boolean
    login: string | null
}
type HeaderContainerDispatchPropsType = {
    logout: () => void
}

export type HeaderContainerPropsType = HeaderContainerOwnPropsType
    & HeaderContainerStatePropsType
    & HeaderContainerDispatchPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): HeaderContainerStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect<
    HeaderContainerStatePropsType,
    HeaderContainerDispatchPropsType,
    HeaderContainerOwnPropsType,
    AppStateType>(mapStateToProps, {logout}
)(HeaderContainer)