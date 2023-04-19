import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGuard } from '../authentication/components/profile.guard';
import { ProfileComponent } from './profile.component';

const routes: Routes = [{ path: ':id', component: ProfileComponent, canActivate: [ProfileGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
