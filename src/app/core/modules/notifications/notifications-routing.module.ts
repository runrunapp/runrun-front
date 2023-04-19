import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { ProfileGuard } from '../authentication/components/profile.guard';
import { NotificationsComponent } from './notifications.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    canActivate: [ProfileGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsRoutingModule {}
