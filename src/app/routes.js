export default {
  sendMessage: channelId => `/api/v1/channels/${channelId}/messages`,
  channel: channelId => `/api/v1/channels/${channelId}`,
  channels: () => '/api/v1/channels/',
};
