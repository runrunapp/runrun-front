import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { SpinerModule } from 'src/app/shared/runrun-components/spiner/spiner.module';
import { TextareaNumberedModule } from 'src/app/shared/textarea-numbered/textarea-numbered.module';
import { LocalDetailsComponent } from './local-details.component';

@NgModule({
  declarations: [LocalDetailsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SpinerModule,
    CheckgroupModule,
    TextareaNumberedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [LocalDetailsComponent],
})
export class LocalDetailsModule {}
