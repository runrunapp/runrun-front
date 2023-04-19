import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';

// import {
//   SocialLoginModule,
//   SocialAuthServiceConfig,
// } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { HttpClient } from '@angular/common/http';
import { VerificationPageComponent } from './components/verification-page/verification-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

@NgModule({
  declarations: [VerificationPageComponent, VerifyEmailComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FlexLayoutModule,
    // SocialLoginModule,
  ],
  providers: [
    HttpClient,
    // AuthenticationService,
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '404156990804-s17pf5sdgap03rqi5scgcifv1pkk2n4r.apps.googleusercontent.com'
    //         ),
    //       },
    //     ],
    //   } as SocialAuthServiceConfig,
    // },
  ],
})
export class AuthenticationModule {}
