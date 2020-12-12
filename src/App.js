import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {compose} from 'redux';
import store from './redux/reduxStore'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
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
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        console.log(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp()
        // subscribe на возможные не перехваченные rejects of promises
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        // unsubscribe
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Switch>
                    <Route exact path='/'
                        render={() => <Redirect to={'/profile'} />} />
                    <Route path='/dialogs' 
                        render={() => <DialogsContainer />} />
                    <Route path='/profile/:userId?' 
                        render={() => <ProfileContainer />} />
                    <Route path='/users' 
                        render={() => <UsersContainer />} />
                    <Route path='/login' 
                        render={() => <LoginPage />} />
                    <Route path='*' 
                        render={() => <div>404 NOT FOUND</div>} />
                </Switch>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

const MainApp = (props) => {
    return  <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
}

export default MainApp