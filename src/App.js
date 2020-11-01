import React from 'react';
import {Route} from 'react-router-dom'
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dialogs from './components/dialogs/Dialogs';
import Profile from './components/profile/Profile';
import './App.sass';

const App = (props) => {
  return (
    <div className ='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
        <Route path='/profile' render={() => 
          <Profile
            state={props.state.profilePage}
            dispatch={props.dispatch}
          />}
        />
      </div>
    </div>
  );
}

export default App;
