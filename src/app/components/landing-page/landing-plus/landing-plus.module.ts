import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPlusComponent } from './landing-plus.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    LandingPlusComponent
  ],
  imports: [
    CommonModule, FlexLayoutModule
  ],
  exports: [
    LandingPlusComponent
  ]
})
export class LandingPlusModule { }
