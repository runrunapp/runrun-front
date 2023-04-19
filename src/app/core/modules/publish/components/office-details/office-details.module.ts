import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { SpinerModule } from 'src/app/shared/runrun-components/spiner/spiner.module';
import { TextareaNumberedModule } from './../../../../../shared/textarea-numbered/textarea-numbered.module';
import { OfficeDetailsComponent } from './office-details.component';

@NgModule({
  declarations: [OfficeDetailsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TextareaNumberedModule,
    SpinerModule,
    CheckgroupModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [OfficeDetailsComponent],
})
export class OfficeDetailsModule {}
