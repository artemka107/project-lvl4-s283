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

export const renameChannel = createAction('CHANNEL_RENAME');

export const addUsername = createAction('USERNAME_ADD');

export const setCurrentChannelId = createAction('CURRENT_CHANNEL_ID_SET');

export const addMessage = createAction('MESSAGE_ADD');

export const normalizeMessages = createAction('MESSAGES_NORMALIZE');

export const showModal = createAction('MODAL_SHOW');

export const hideModal = createAction('MODAL_HIDE');

export const createChannel = ({ ui, data }) => async (dispatch) => {
  try {
    await axios.post(routes.channels(), {
      data: {
        attributes: {
          ...data,
          removable: true,
        },
      },
    });
    dispatch(hideModal({ name: ui.name }));
  } catch (e) {
    console.log(e);
    throw new SubmissionError(e);
  }
};

export const editChannel = ({ ui, data }) => async (dispatch) => {
  try {
    await axios.patch(routes.channel(data.id), {
      data: {
        attributes: {
          ...data,
        },
      },
    });
    dispatch(hideModal({ name: ui.name }));
  } catch (e) {
    console.log(e);
    throw new SubmissionError(e);
  }
};

export const removeChannelRequest = createAction('CHANNEL_REMOVE_REQUEST');
export const removeChannelSuccess = createAction('CHANNEL_REMOVE_SUCCESS');
export const removeChannelFailure = createAction('CHANNEL_REMOVE_FAILURE');


export const removeChannel = ({ ui, data }) => async (dispatch) => {
  dispatch(removeChannelRequest());
  try {
    await axios.delete(routes.channel(data.id));
    dispatch(hideModal({ name: ui.name }));
  } catch (e) {
    dispatch(removeChannelFailure());
    console.log(e);
  }
};
