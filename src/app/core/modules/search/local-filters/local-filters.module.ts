import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalFiltersComponent } from './local-filters.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RunrunSelectModule } from 'src/app/components/runrun-select/runrun-select.module';
import { SpinerModule } from 'src/app/shared/runrun-components/spiner/spiner.module';
import { TextInputModule } from 'src/app/shared/runrun-components/text-input/text-input.module';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { NgrxFormsModule } from 'ngrx-forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialNgrxFormsModule } from 'src/app/material-ngrx-forms';

@NgModule({
  declarations: [LocalFiltersComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RunrunSelectModule,
    SpinerModule,
    TextInputModule,
    CheckgroupModule,
    NgrxFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialNgrxFormsModule,
  ],
  exports: [LocalFiltersComponent],
})
export class LocalFiltersModule {}
