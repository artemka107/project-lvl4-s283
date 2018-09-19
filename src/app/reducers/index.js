import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { keyBy } from 'lodash';
import * as actions from '../actions';

const username = handleActions({
  [actions.addUsername](state, { payload }) {
    return payload.username;
  },
}, '');

const channels = handleActions({
  [actions.addChannels](state, { payload }) {
    return payload.channels;
  },
  [actions.addChannel](state, { payload: { channel } }) {
    return [...state, channel];
  },
  [actions.removeChannel](state, { payload: { id } }) {
    return state.filter(channel => channel.id !== id);
  },
}, {});

const currentChannelId = handleActions({
  [actions.setCurrentChannelId](state, { payload: { id } }) {
    return id;
  },
}, '');

const messages = handleActions({
  [actions.addMessage](state, { payload: { message } }) {
    return { ...state, [message.id]: message };
  },
  [actions.normalizeMessages](state, { payload: { messagesList } }) {
    return keyBy(messagesList, 'id');
  },
}, {});

const modal = handleActions({
  [actions.showModal](state, { payload: { name } }) {
    return {
      name,
      isVisible: true,
    };
  },
  [actions.hideModal](state, { payload: { name } }) {
    return {
      name,
      isVisible: false,
    };
  },
}, {});


export default combineReducers({
  username,
  channels,
  currentChannelId,
  messages,
  modal,
  form: formReducer,
});
