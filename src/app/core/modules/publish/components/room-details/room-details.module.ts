import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RunrunSelectModule } from 'src/app/components/runrun-select/runrun-select.module';
import { CheckgroupModule } from 'src/app/shared/checkgroup/checkgroup.module';
import { SpinerModule } from 'src/app/shared/runrun-components/spiner/spiner.module';
import { TextareaNumberedModule } from 'src/app/shared/textarea-numbered/textarea-numbered.module';
import { BooleanCheckgroupModule } from '../../../../../shared/boolean-checkgroup/boolean-checkgroup.module';
import { RoomDetailsComponent } from './room-details.component';

@NgModule({
  declarations: [RoomDetailsComponent],
  imports: [
    CommonModule,
    BooleanCheckgroupModule,
    FlexLayoutModule,
    RunrunSelectModule,
    SpinerModule,
    CheckgroupModule,
    BooleanCheckgroupModule,
    TextareaNumberedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [RoomDetailsComponent],
})
export class RoomDetailsModule {}
