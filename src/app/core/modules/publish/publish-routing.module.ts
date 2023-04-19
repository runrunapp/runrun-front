import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/plan-selector/plan-selector.module').then(
        (m) => m.PlanSelectorModule
      ),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./components/publish-form/publish-form.module').then(
        (m) => m.PublishFormModule
      ),
  },
  {
    path: 'finished',
    loadChildren: () =>
      import('./components/publish-finished/publish-finished.module').then(
        (m) => m.PublishFinishedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishRoutingModule {}
