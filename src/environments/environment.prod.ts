const host = 'runrunapp.com';

export const environment = {
  production: true,
  host,
  protocol: 'https',
  apiUrl: /* 'http://localhost:8000/api/v1/' */ `https://${host}/api/v1/`,
  webSocketNotificationURL: `wss://${host}/ws/notifications/`,
  webSocketChatURL: `wss://${host}/ws/chats/`,
};
