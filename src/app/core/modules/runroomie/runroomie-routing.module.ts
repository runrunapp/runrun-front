import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGuard } from '../authentication/components/profile.guard';
import { RunroomieComponent } from './runroomie.component';

const routes: Routes = [
  { path: '', component: RunroomieComponent, canActivate: [ProfileGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunroomieRoutingModule {}
