import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGuard } from '../../../authentication/components/profile.guard';
import { PublishGuard } from '../../guards/publish.guard';

import { PlanSelectorComponent } from './plan-selector.component';

const routes: Routes = [
  {
    path: '',
    component: PlanSelectorComponent,
    canActivate: [PublishGuard, ProfileGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanSelectorRoutingModule {}
