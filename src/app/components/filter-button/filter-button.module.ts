import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonComponent } from './filter-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FilterButtonComponent
  ],
  imports: [
    CommonModule, FlexLayoutModule, MatIconModule, MatButtonModule
  ],
  exports: [
    FilterButtonComponent
  ]
})
export class FilterButtonModule { }
