import { createSelector } from 'reselect';

const getMessages = state => state.messages;
const getCurrentChannelId = state => state.currentChannelId;

export default createSelector(
  getMessages,
  getCurrentChannelId,
  (messages, id) => Object
    .values(messages)
    .filter(({ channelId }) => channelId === id),
);
