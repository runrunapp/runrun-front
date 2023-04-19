import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
// import { PropertyGestionComponent } from './property-gestion/property-gestion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaymentDayPipe } from './payment-day.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AcceptCancelDialogComponent } from './accept-cancel-dialog/accept-cancel-dialog.component';
import { EarningsChartComponent } from './earnings-chart/earnings-chart.component';
import { ReceiptsPageComponent } from './receipts-page/receipts-page.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AddTaxServiceComponent } from './add-tax-service/add-tax-service.component';
import { AddMantainServiceComponent } from './add-mantain-service/add-mantain-service.component';
import { AddDeclaracionJuradaComponent } from './add-declaracion-jurada/add-declaracion-jurada.component';
import { ListingDisplayCardComponent } from './listing-display-card/listing-display-card.component';
import { ListingManagerComponent } from './listing-manager/listing-manager.component';
import { TextareaNumberedModule } from 'src/app/shared/textarea-numbered/textarea-numbered.module';
import { ContractsComponent } from './contracts/contracts.component';
import { DocumentCardComponent } from './document-card/document-card.component';
import { AvatarModule } from 'ngx-avatars';
import { ReceiptsComponent } from './receipts/receipts.component';
import { LegalsComponent } from './legals/legals.component';
import { TenantManagerCardComponent } from './tenant-manager-card/tenant-manager-card.component';
import { HorizontalStepsModule } from 'src/app/components/horizontal-steps/horizontal-steps.module';
import { TenantManagerDetailsComponent } from './tenant-manager-details/tenant-manager-details.component';
import { VisitRequestsComponent } from './visit-requests/visit-requests.component';
import { VisitRequestCardComponent } from './visit-request-card/visit-request-card.component';
import { OcupationFormComponent } from './ocupation-form/ocupation-form.component';

import { LocalDateValueAccessorModule } from 'angular-date-value-accessor';
import {
  AddDocumentDialog,
  AddDocumentFormComponent,
} from './add-document-form/add-document-form.component';
import { IncidencesComponent } from './incidences/incidences.component';
import { ServicesComponent } from './services/services.component';
import { AddReceiptDialogComponent } from './add-receipt-dialog/add-receipt-dialog.component';
import { UpgradePlanDialogComponent } from './upgrade-plan-dialog/upgrade-plan-dialog.component';
import { TenantComponent } from './tenant/tenant.component';

@NgModule({
  declarations: [
    GestionComponent,
    // PropertyGestionComponent,
    PaymentDayPipe,
    AcceptCancelDialogComponent,
    EarningsChartComponent,
    ReceiptsPageComponent,
    ReceiptComponent,
    AddTaxServiceComponent,
    AddMantainServiceComponent,
    AddDeclaracionJuradaComponent,
    ListingDisplayCardComponent,
    ListingManagerComponent,
    ContractsComponent,
    DocumentCardComponent,
    ReceiptsComponent,
    LegalsComponent,
    TenantManagerCardComponent,
    TenantManagerDetailsComponent,
    VisitRequestsComponent,
    VisitRequestCardComponent,
    OcupationFormComponent,
    AddDocumentFormComponent,
    AddDocumentDialog,
    IncidencesComponent,
    ServicesComponent,
    AddReceiptDialogComponent,
    UpgradePlanDialogComponent,
    TenantComponent,
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    NgxChartsModule,
    TextareaNumberedModule,
    AvatarModule,
    HorizontalStepsModule,
    LocalDateValueAccessorModule,
    FormsModule,
  ],
})
export class GestionModule {}
