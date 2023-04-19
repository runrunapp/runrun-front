import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFlipButtonComponent } from './icon-flip-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    IconFlipButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    IconFlipButtonComponent
  ]
})
export class IconFlipButtonModule { }
