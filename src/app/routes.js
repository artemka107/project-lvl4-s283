export default {
  sendMessage: channelId => `/api/v1/channels/${channelId}/messages`,
  channels: () => '/api/v1/channels/',
};
