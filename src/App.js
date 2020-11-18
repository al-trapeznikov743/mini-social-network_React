import React from 'react';
import {Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import UsersContainer from './components/users/UsersContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import HeaderContainer from './components/header/HeaderContainer';
import LoginPage from './components/login/Login';
import './App.sass';

const App = () => {
  return (
    <div className ='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <LoginPage />} />
      </div>
    </div>
  );
}

export default App;
