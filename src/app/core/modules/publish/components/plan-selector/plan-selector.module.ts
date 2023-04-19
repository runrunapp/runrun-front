import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSelectorRoutingModule } from './plan-selector-routing.module';
import { PlanSelectorComponent } from './plan-selector.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PlanSelectorComponent],
  imports: [
    CommonModule,
    PlanSelectorRoutingModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
  ],
})
export class PlanSelectorModule {}
