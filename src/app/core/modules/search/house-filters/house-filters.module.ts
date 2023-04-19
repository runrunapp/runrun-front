import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseFiltersComponent } from './house-filters.component';
import { RunrunSelectModule } from 'src/app/components/runrun-select/runrun-select.module';
import { MaterialNgrxFormsModule } from 'src/app/material-ngrx-forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgrxFormsModule } from 'ngrx-forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TextInputModule } from 'src/app/shared/runrun-components/text-input/text-input.module';
import { SpinerModule } from 'src/app/shared/runrun-components/spiner/spiner.module';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';



@NgModule({
  declarations: [
    HouseFiltersComponent
  ],
  imports: [
    CommonModule,
    RunrunSelectModule,
    MaterialNgrxFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgrxFormsModule,
    FlexLayoutModule,
    TextInputModule,
    SpinerModule,
    CheckgroupModule,

  ],
  exports: [
    HouseFiltersComponent
  ]
})
export class HouseFiltersModule { }
