import '@babel/polyfill';
import faker from 'faker';
import cookies from 'js-cookie';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gon from 'gon';
import listenSocket from './app/socket-actions';
import App from './app/containers/App';
import reducers from './app/reducers';
import * as actions from './app/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware,
  ),
);

const { channels, currentChannelId, messages } = gon;

let username = cookies.get('username');
if (!username) {
  cookies.set('username', faker.name.findName());
  username = cookies.get('username');
}

store.dispatch(actions.addChannels({ channels }));
store.dispatch(actions.addUsername({ username }));
store.dispatch(actions.setCurrentChannelId({ id: currentChannelId }));
store.dispatch(actions.normalizeMessages({ messagesList: messages }));

listenSocket(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#chat'),
);
