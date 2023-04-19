import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchFieldModule } from 'src/app/shared/runrun-components/search-field/search-field.module';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MenuButtonModule } from '../menu-button/menu-button.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatBadgeModule } from '@angular/material/badge';
import { AvatarModule } from 'ngx-avatars';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    SearchFieldModule,
    MatMenuModule,
    MenuButtonModule,
    OverlayModule,
    MatBadgeModule,
    AvatarModule,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
