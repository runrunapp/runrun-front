import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanCheckgroupComponent } from './boolean-checkgroup.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    BooleanCheckgroupComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCheckboxModule
  ],
  exports: [
    BooleanCheckgroupComponent
  ]
})
export class BooleanCheckgroupModule { }
