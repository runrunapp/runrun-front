import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from './spiner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SpinerComponent],
  imports: [CommonModule, FlexLayoutModule, ReactiveFormsModule, MatIconModule],
  exports: [SpinerComponent],
})
export class SpinerModule {}
