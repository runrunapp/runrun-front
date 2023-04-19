import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeFiltersComponent } from './office-filters.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RunrunSelectModule } from 'src/app/components/runrun-select/runrun-select.module';
import { SpinerModule } from 'src/app/shared/runrun-components/spiner/spiner.module';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { NgrxFormsModule } from 'ngrx-forms';
import { TextInputModule } from 'src/app/shared/runrun-components/text-input/text-input.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialNgrxFormsModule } from 'src/app/material-ngrx-forms';



@NgModule({
  declarations: [
    OfficeFiltersComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RunrunSelectModule,
    SpinerModule,
    CheckgroupModule,
    NgrxFormsModule,
    TextInputModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialNgrxFormsModule,

  ],
  exports: [
    OfficeFiltersComponent
  ]
})
export class OfficeFiltersModule { }
