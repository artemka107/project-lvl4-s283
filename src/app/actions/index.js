import { createAction } from 'redux-actions';
import { SubmissionError } from 'redux-form';
import axios from 'axios';
import routes from '../routes';

export const sendMessage = (channelId, attributes) => async () => {
  try {
    await axios.post(routes.sendMessage(channelId), {
      data: {
        attributes,
      },
    });
  } catch (e) {
    console.log(e);
    throw new SubmissionError(e);
  }
};

export const addChannels = createAction('CHANNELS_ADD');

export const addChannel = createAction('CHANNEL_ADD');

export const addUsername = createAction('USERNAME_ADD');

export const setCurrentChannelId = createAction('CURRENT_CHANNEL_ID_SET');

export const addMessage = createAction('MESSAGE_ADD');

export const normalizeMessages = createAction('MESSAGES_NORMALIZE');

export const showModal = createAction('MODAL_SHOW');

export const hideModal = createAction('MODAL_HIDE');

export const createChannel = attributes => async () => {
  try {
    await axios.post(routes.channels(), {
      data: {
        attributes: {
          ...attributes,
          removable: true,
        },
      },
    });
  } catch (e) {
    console.log(e);
    throw new SubmissionError(e);
  }
};
