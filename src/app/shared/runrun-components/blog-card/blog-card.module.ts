import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    BlogCardComponent
  ]
})
export class BlogCardModule { }
