import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MenuButtonComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  exports: [MenuButtonComponent],
})
export class MenuButtonModule {}
