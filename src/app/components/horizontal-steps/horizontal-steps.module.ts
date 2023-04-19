import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalStepsComponent } from './horizontal-steps.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HorizontalStepsComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [HorizontalStepsComponent],
})
export class HorizontalStepsModule {}
