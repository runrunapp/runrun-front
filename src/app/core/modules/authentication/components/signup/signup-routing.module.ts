import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../../authentication.guard';
import { SignupComponent } from './signup.component';


const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupRoutingModule {}
