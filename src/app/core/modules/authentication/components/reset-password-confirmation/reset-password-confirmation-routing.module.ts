import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordConfirmationComponent } from './reset-password-confirmation.component';

const routes: Routes = [
  { path: ':uidb64/:token', component: ResetPasswordConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordConfirmationRoutingModule {}
