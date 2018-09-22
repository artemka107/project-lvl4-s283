import { createSelector } from 'reselect';

const getChannels = state => state.channels;

export default createSelector(
  getChannels,
  messages => Object.values(messages),
);
