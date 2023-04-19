import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '../../core/pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FeedCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxUsefulSwiperModule,
    MatIconModule,
    MatButtonModule,
    PipesModule,
  ],
  exports: [FeedCardComponent],
})
export class FeedCardModule {}
