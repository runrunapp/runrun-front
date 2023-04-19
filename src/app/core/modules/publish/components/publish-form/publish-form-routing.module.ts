import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGuard } from '../../../authentication/components/profile.guard';
import { PublishFormComponent } from './publish-form.component';

const routes: Routes = [{ path: '', component: PublishFormComponent, canActivate: [ProfileGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishFormRoutingModule { }
