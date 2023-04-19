import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingSwiperComponent } from './listing-swiper.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SimplePropertyCardModule } from 'src/app/shared/runrun-components/simple-property-card/simple-property-card.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListingSwiperComponent
  ],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule,
    SimplePropertyCardModule,
    RouterModule
  ],
  exports: [
    ListingSwiperComponent
  ]
})
export class ListingSwiperModule { }
