import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishFormConditionsComponent } from './publish-form-conditions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { RunrunCalendarModule } from 'src/app/shared/runrun-calendar/runrun-calendar.module';
import { TextareaNumberedModule } from 'src/app/shared/textarea-numbered/textarea-numbered.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublishFormConditionsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    RunrunCalendarModule,
    TextareaNumberedModule,
    MatFormFieldModule,
    MatInputModule,
    CheckgroupModule,
    ReactiveFormsModule,
  ],
  exports: [PublishFormConditionsComponent],
})
export class PublishFormConditionsModule {}
