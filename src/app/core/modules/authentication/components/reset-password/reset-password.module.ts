import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ResetPasswordDoneComponent } from './reset-password-done/reset-password-done.component';

@NgModule({
  declarations: [ResetPasswordComponent, ResetPasswordDoneComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class ResetPasswordModule {}
