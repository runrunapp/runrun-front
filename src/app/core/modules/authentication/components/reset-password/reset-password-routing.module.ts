import { ResetPasswordDoneComponent } from './reset-password-done/reset-password-done.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';

const routes: Routes = [
  { path: 'done', component: ResetPasswordDoneComponent },
  { path: '', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordRoutingModule {}
