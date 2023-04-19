import { FooterModule } from 'src/app/components/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunrunplusRoutingModule } from './runrunplus-routing.module';
import { RunrunplusComponent } from './runrunplus.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [RunrunplusComponent],
  imports: [
    CommonModule,
    RunrunplusRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    FooterModule,
  ],
})
export class RunrunplusModule {}
