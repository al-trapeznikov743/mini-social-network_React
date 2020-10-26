import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 1, message: 'It\'s my first post', likesCount: 9}
]

let dialogs = [
  {id: 1, name: 'Dimon'},
  {id: 1, name: 'Sveta'},
  {id: 1, name: 'Kent'},
  {id: 1, name: 'Denchik'}
]

let messages = [
  {id:1, message: 'Hi'},
  {id:1, message: 'How is your it-kamasutra'},
  {id:1, message: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
