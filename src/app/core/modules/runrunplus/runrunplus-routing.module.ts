import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunrunplusComponent } from './runrunplus.component';

const routes: Routes = [{ path: '', component: RunrunplusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunrunplusRoutingModule { }
