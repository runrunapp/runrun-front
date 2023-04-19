import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunroomieFeedCardComponent } from './runroomie-feed-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AvatarModule } from 'ngx-avatars';

@NgModule({
  declarations: [RunroomieFeedCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatIconModule,
    AvatarModule,
  ],
  exports: [RunroomieFeedCardComponent],
})
export class RunroomieFeedCardModule {}
