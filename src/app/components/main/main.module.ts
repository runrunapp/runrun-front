import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuButtonModule } from '../menu-button/menu-button.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@NgModule({
  declarations: [MainComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FlexLayoutModule,
    MenuButtonModule,
    ToolbarModule,
  ],
})
export class MainModule {}
