import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { keyBy } from 'lodash';
import constants from '../constants';
import * as actions from '../actions';


const messageSendingState = handleActions({
  [actions.sendMessageRequest]() {
    return constants.REQUEST;
  },
  [actions.sendMessageSuccess]() {
    return constants.SUCCESS;
  },
  [actions.sendMessageFailure]() {
    return constants.FAILURE;
  },
}, '');

const username = handleActions({
  [actions.addUsername](state, { payload }) {
    return payload.username;
  },
}, '');

const channels = handleActions({
  [actions.addChannels](state, { payload }) {
    return payload.channels;
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


export default combineReducers({
  username,
  channels,
  currentChannelId,
  messages,
  messageSendingState,
  form: formReducer,
});
