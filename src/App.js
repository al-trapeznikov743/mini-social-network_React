import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dialogs from './components/dialogs/Dialogs';
import Profile from './components/profile/Profile';
import './App.sass';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className ='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
          <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
