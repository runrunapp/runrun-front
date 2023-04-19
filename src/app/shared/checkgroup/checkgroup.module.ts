import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckgroupComponent } from './checkgroup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CheckgroupComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  exports: [CheckgroupComponent],
})
export class CheckgroupModule {}
