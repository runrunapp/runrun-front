import { ContactUsComponent } from './../contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from 'src/app/privacy-policy/privacy-policy.component';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('../landing-page/landing-page.module').then(
            (m) => m.LandingPageModule
          ),
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import(
            '../../core/modules/authentication/authentication.module'
          ).then((m) => m.AuthenticationModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../../core/modules/blog/blog.module').then(
            (m) => m.BlogModule
          ),
      },
      {
        path: 'publish',
        loadChildren: () =>
          import('../../core/modules/publish/publish.module').then(
            (m) => m.PublishModule
          ),
      },
      {
        path: 'feed',
        loadChildren: () =>
          import('../../core/modules/search/search.module').then(
            (m) => m.SearchModule
          ),
      },
      {
        path: 'listing',
        loadChildren: () =>
          import('../../core/modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../../core/modules/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: 'user-profile-form',
        loadChildren: () =>
          import(
            '../../core/modules/user-profile/user-profile-form/user-profile-form.module'
          ).then((m) => m.UserProfileFormModule),
      },
      {
        path: 'runroomie',
        loadChildren: () =>
          import('../../core/modules/runroomie/runroomie.module').then(
            (m) => m.RunroomieModule
          ),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('../../core/modules/notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'chats',
        loadChildren: () =>
          import('../../core/modules/chat/chat.module').then(
            (m) => m.ChatModule
          ),
      },
      {
        path: 'gestion',
        loadChildren: () =>
          import('../../core/modules/gestion/gestion.module').then(
            (m) => m.GestionModule
          ),
      },
      {
        path: 'runrunplus',
        loadChildren: () =>
          import('../../core/modules/runrunplus/runrunplus.module').then(
            (m) => m.RunrunplusModule
          ),
      },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
