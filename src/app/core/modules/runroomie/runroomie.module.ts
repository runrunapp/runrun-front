import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunroomieRoutingModule } from './runroomie-routing.module';
import { RunroomieComponent } from './runroomie.component';
import { RunroomieFeedCardModule } from './runroomie-feed-card/runroomie-feed-card.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RunroomieComponent],
  imports: [
    CommonModule,
    RunroomieRoutingModule,
    RunroomieFeedCardModule,
    FlexLayoutModule,
    MatIconModule,
  ],
})
export class RunroomieModule {}
