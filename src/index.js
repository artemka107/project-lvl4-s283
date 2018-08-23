import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './app/App';

const container = document.querySelector('#chat');
const { channels } = window.gon;
ReactDom.render(<App channels={channels} />, container);

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
// if (process.env.NODE_ENV !== 'production') {
//   localStorage.debug = 'chat:*';
// }
