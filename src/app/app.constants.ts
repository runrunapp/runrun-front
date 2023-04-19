export const URLs = {
  accountsBaseURL: '/home/accounts',

  chatURL: '/home/chats',
  editListingURL: '/home/gestion/edit-listing',

  contactUs: '/home/contact-us',

  loginURL: `/home/accounts/login`,
  signupURL: `/home/accounts/signup`,
  logoutURL: `/home/accounts/logout`,
  verificationURL: `/home/accounts/verification`,
  landingPageURL: '/home',

  blogURL: '/home/blog',

  feedURL: '/home/feed',

  gestionURL: '/home/gestion',
  tenantURL: '/home/gestion/tenant',
  managerURL: '/home/gestion/manager',
  ocupationURL: '/home/gestion/ocupation',
  contracts: '/home/gestion/contracts',
  receipts: '/home/gestion/receipts',
  legals: '/home/gestion/legal',
  visitRequests: '/home/gestion/visit-requests',
  incidences: '/home/gestion/incidences',
  services: '/home/gestion/services',

  notificationsURL: '/home/notifications',

  profileURL: '/home/listing',
  publishURL: '/home/publish',
  publishNewURL: '/home/publish/new',
  publishFinishedURL: `/home/publish/finished`,

  resetPassword: '/home/accounts/reset-password',
  resetPasswordDone: '/home/accounts/reset-password/done',
  resetPasswordConfirmation: '/home/accounts/reset-password-confirmation',
  runroomie: '/home/runroomie',
  runroomieForm: '/home/runroomie/share',

  runrunplus: '/home/runrunplus',

  userProfileURL: '/home/users',
  userFavoritesURL: '/home/users/favorites',
  userProfileFormURL: '/home/user-profile-form',
};

import { BREAKPOINTS } from '@angular/flex-layout';

export const OVERRIDE_BREAKPOINTS = [
  {
    alias: 'xs',
    mediaQuery: 'screen and (min-width: 1px) and (max-width: 599px)',
    overlapping: false,
    priority: 1001,
  },

  {
    alias: 'tablet',
    mediaQuery: 'screen and (min-width: 600px) and (max-width: 1000px)',
    overlapping: false,
  },
  {
    alias: 'desktop',
    mediaQuery: 'screen and (min-width: 1000px)',
    overlapping: false,
    priority: 1001,
  },
];

export const BreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: OVERRIDE_BREAKPOINTS,
  multi: true,
};
