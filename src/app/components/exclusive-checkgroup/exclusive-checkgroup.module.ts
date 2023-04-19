import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExclusiveCheckgroupComponent } from './exclusive-checkgroup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    ExclusiveCheckgroupComponent
  ],
  imports: [
    CommonModule, FlexLayoutModule, MatCheckboxModule
  ],
  exports: [
    ExclusiveCheckgroupComponent,

  ]
})
export class ExclusiveCheckgroupModule { }
