import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListingComponent } from './edit-listing.component';

const routes: Routes = [{ path: ':id', component: EditListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditListingRoutingModule {}
