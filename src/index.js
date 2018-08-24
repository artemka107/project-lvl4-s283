import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import gon from 'gon';
import React from 'react';
import { render } from 'react-dom';
import App from './app/App';

const container = document.querySelector('#chat');
const { channels } = gon;

render(<App channels={channels} />, container);
