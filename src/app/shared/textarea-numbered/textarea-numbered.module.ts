import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaNumberedComponent } from './textarea-numbered.component';
import { AutosizeModule } from 'ngx-autosize';



@NgModule({
  declarations: [
    TextareaNumberedComponent
  ],
  imports: [
    CommonModule,
    AutosizeModule
  ],
  exports: [
    TextareaNumberedComponent
  ]
})
export class TextareaNumberedModule { }
