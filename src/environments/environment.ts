// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const host = 'runrunapp.com';
const host = '127.0.0.1:8000';
const protocol = 'http';
export const environment = {
  production: false,
  host,
  protocol,
  apiUrl: /* 'http://localhost:8000/api/v1/' */ `${protocol}://${host}/api/v1/`,
  webSocketNotificationURL: `ws://${host}/ws/notifications/`,
  webSocketChatURL: `ws://${host}/ws/chats/`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
