import { TenantComponent } from './tenant/tenant.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeclaracionJuradaComponent } from './add-declaracion-jurada/add-declaracion-jurada.component';
import { AddMantainServiceComponent } from './add-mantain-service/add-mantain-service.component';
import { AddTaxServiceComponent } from './add-tax-service/add-tax-service.component';
import { ContractsComponent } from './contracts/contracts.component';
import { GestionComponent } from './gestion.component';
import { ListingManagerComponent } from './listing-manager/listing-manager.component';
import { ReceiptsPageComponent } from './receipts-page/receipts-page.component';
import { LegalsComponent } from './legals/legals.component';
import { TenantManagerDetailsComponent } from './tenant-manager-details/tenant-manager-details.component';
import { VisitRequestsComponent } from './visit-requests/visit-requests.component';
import { OcupationFormComponent } from './ocupation-form/ocupation-form.component';
import { IncidencesComponent } from './incidences/incidences.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'manager/:id', component: ListingManagerComponent },
  { path: 'tenant-manager/:id', component: TenantManagerDetailsComponent },
  { path: 'contracts/:id', component: ContractsComponent },
  { path: 'receipts/:id', component: ReceiptsComponent },
  { path: 'incidences/:id', component: IncidencesComponent },
  { path: 'legal/:id', component: LegalsComponent },
  { path: 'visit-requests/:id', component: VisitRequestsComponent },
  { path: 'ocupation/:id', component: OcupationFormComponent },
  { path: 'services/:id', component: ServicesComponent },
  {
    path: 'edit-listing',
    loadChildren: () =>
      import('./edit-listing/edit-listing.module').then(
        (m) => m.EditListingModule
      ),
  },

  { path: 'add/tax', component: AddTaxServiceComponent },
  { path: 'add/service', component: AddMantainServiceComponent },
  { path: 'add/declaracion-jurada', component: AddDeclaracionJuradaComponent },
  { path: 'tenant', component: TenantComponent },
  { path: '', component: GestionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionRoutingModule {}
