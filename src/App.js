import React from 'react';
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/actions/appActions'
import Navbar from './components/navbar/Navbar'
import ProfileContainer from './components/profile/ProfileContainer'
import UsersContainer from './components/users/UsersContainer'
import DialogsContainer from './components/dialogs/DialogsContainer'
import HeaderContainer from './components/header/HeaderContainer'
import LoginPage from './components/login/Login'
import './App.sass'
import Preloader from './components/common/preloader/Preloader';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <LoginPage />} />
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)