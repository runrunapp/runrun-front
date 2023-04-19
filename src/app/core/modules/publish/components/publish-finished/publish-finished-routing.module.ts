import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishFinishedComponent } from './publish-finished.component';

const routes: Routes = [{ path: '', component: PublishFinishedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishFinishedRoutingModule { }
