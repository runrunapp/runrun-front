import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageFiltersComponent } from './garage-filters.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgrxFormsModule } from 'ngrx-forms';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { BooleanCheckgroupModule } from 'src/app/shared/boolean-checkgroup/boolean-checkgroup.module';
import { RunrunSelectModule } from 'src/app/components/runrun-select/runrun-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    GarageFiltersComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RunrunSelectModule,
    BooleanCheckgroupModule,
    CheckgroupModule,
    NgrxFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    GarageFiltersComponent
  ]
})
export class GarageFiltersModule { }
