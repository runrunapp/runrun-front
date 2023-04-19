import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordConfirmationRoutingModule } from './reset-password-confirmation-routing.module';
import { ResetPasswordConfirmationComponent } from './reset-password-confirmation.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ResetPasswordConfirmationComponent],
  imports: [
    CommonModule,
    ResetPasswordConfirmationRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class ResetPasswordConfirmationModule {}
