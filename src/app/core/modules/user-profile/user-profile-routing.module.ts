import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  { path: 'favorites', component: FavoritesComponent },
  { path: ':id', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
