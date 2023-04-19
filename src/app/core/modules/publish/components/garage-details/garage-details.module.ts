import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BooleanCheckgroupModule } from 'src/app/shared/boolean-checkgroup/boolean-checkgroup.module';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { TextareaNumberedModule } from 'src/app/shared/textarea-numbered/textarea-numbered.module';
import { GarageDetailsComponent } from './garage-details.component';

@NgModule({
  declarations: [GarageDetailsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BooleanCheckgroupModule,
    CheckgroupModule,
    TextareaNumberedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [GarageDetailsComponent],
})
export class GarageDetailsModule {}
