import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomFiltersComponent } from './room-filters.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RunrunSelectModule } from 'src/app/components/runrun-select/runrun-select.module';
import { NgrxFormsModule } from 'ngrx-forms';
import { MaterialNgrxFormsModule } from 'src/app/material-ngrx-forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextInputModule } from 'src/app/shared/runrun-components/text-input/text-input.module';
import { SpinerModule } from 'src/app/shared/runrun-components/spiner/spiner.module';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { BooleanCheckgroupModule } from 'src/app/shared/boolean-checkgroup/boolean-checkgroup.module';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    RoomFiltersComponent
  ],
  imports: [
    CommonModule, RunrunSelectModule,
    MaterialNgrxFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgrxFormsModule,
    MatCheckboxModule,
    FlexLayoutModule,
    TextInputModule,
    SpinerModule,
    CheckgroupModule,
    BooleanCheckgroupModule,
  ],
  exports: [
    RoomFiltersComponent
  ]
})
export class RoomFiltersModule { }
