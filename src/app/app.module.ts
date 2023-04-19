import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Toast notification support

import { ToastrModule } from 'ngx-toastr';
import { RootStoreModule } from './root-store';
import { MarkdownModule } from 'ngx-markdown';
import { AuthInterceptor } from './core/modules/authentication/services/auth.interceptor';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import localeEs from '@angular/common/locales/es';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RootStoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MarkdownModule.forRoot(),
    MatMomentDateModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    { provide: LOCALE_ID, useValue: 'es' },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        display: {
          dateInput: 'LL',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
  ],
  bootstrap: [AppComponent],

  exports: [],
})
export class AppModule {}
