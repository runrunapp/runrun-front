import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from './navmenu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuButtonModule } from '../menu-button/menu-button.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavmenuComponent],
  imports: [CommonModule, FlexLayoutModule, MenuButtonModule, RouterModule, MatButtonModule],
  exports: [NavmenuComponent],
})
export class NavmenuModule {}
