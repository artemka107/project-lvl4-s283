export default {
  sendMessage: channelId => `/api/v1/channels/${channelId}/messages`,
  channels: channelId => `/api/v1/channels/${channelId || ''}`,
};
