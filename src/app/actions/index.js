import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const sendMessageRequest = createAction('SEND_MESSAGE_REQUEST');
export const sendMessageSuccess = createAction('SEND_MESSAGE_SUCCESS');
export const sendMessageFailure = createAction('SEND_MESSAGE_FAILURE');

export const sendMessage = (channelId, attributes) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    await axios.post(routes.sendMessage(channelId), {
      data: {
        attributes,
      },
    });
    dispatch(sendMessageSuccess());
  } catch (e) {
    dispatch(sendMessageFailure());
  }
};

export const addChannels = createAction('ADD_CHANNELS');

export const addUsername = createAction('ADD_USERNAME');

export const setCurrentChannelId = createAction('SET_CURRENT_CHANNEL_ID');

export const addMessage = createAction('ADD_MESSAGE');

export const normalizeMessages = createAction('NORMALIZE_MESSAGES');
