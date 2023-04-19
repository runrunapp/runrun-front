import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishFinishedRoutingModule } from './publish-finished-routing.module';
import { PublishFinishedComponent } from './publish-finished.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnimateModule } from 'src/app/animate-in';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PublishFinishedComponent],
  imports: [
    CommonModule,
    PublishFinishedRoutingModule,
    FlexLayoutModule,
    AnimateModule,
    MatIconModule,
  ],
})
export class PublishFinishedModule {}
