import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileFormComponent } from './user-profile-form.component';

const routes: Routes = [{ path: '', component: UserProfileFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileFormRoutingModule { }
