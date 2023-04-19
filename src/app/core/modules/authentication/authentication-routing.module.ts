import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogoutComponent } from './components/logout/logout.component';
import { VerificationPageComponent } from './components/verification-page/verification-page.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'verification', component: VerificationPageComponent },
  { path: 'verify-email/:key', component: VerifyEmailComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./components/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./components/logout/logout.module').then((m) => m.LogoutModule),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./components/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordModule
      ),
  },

  {
    path: 'reset-password-confirm',
    loadChildren: () =>
      import(
        './components/reset-password-confirmation/reset-password-confirmation.module'
      ).then((m) => m.ResetPasswordConfirmationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
