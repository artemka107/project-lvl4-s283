import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { keyBy, omitBy, omit } from 'lodash';
import * as actions from '../actions';

const username = handleActions({
  [actions.addUsername](state, { payload }) {
    return payload.username;
  },
}, '');

const channels = handleActions({
  [actions.addChannels](state, { payload }) {
    return keyBy(payload.channels, 'id');
  },
  [actions.addChannel](state, { payload: { channel } }) {
    return { ...state, [channel.id]: channel };
  },
  [actions.renameChannel](state, { payload: { name, id } }) {
    const channel = state[id];
    const updatedChannel = { ...channel, name };

    return { ...state, [channel.id]: updatedChannel };
  },
  [actions.removeChannelSuccess](state, { payload: { id } }) {
    return omit(state, id);
  },
}, {});

const channelsRemovingState = handleActions({
  [actions.removeChannelRequest]() {
    return 'request';
  },
  [actions.removeChannelSuccess]() {
    return 'success';
  },
  [actions.removeChannelFailure]() {
    return 'failure';
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
  [actions.removeChannelSuccess](state, { payload: { id } }) {
    return omitBy(state, ({ channelId }) => channelId === id);
  },
}, {});

const modal = handleActions({
  [actions.showModal](state, { payload: { ui, data } }) {
    return {
      ...state,
      ui: {
        ...ui,
        isVisible: true,
      },
      data: {
        ...data,
      },
    };
  },
  [actions.hideModal](state, { payload: { ui } }) {
    return {
      ...state,
      ui: {
        ...ui,
        isVisible: false,
      },
    };
  },
}, {
  ui: {
    isVisible: false,
    name: '',
  },
  data: {},
});


export default combineReducers({
  username,
  channels,
  channelsRemovingState,
  currentChannelId,
  messages,
  modal,
  form: formReducer,
});
