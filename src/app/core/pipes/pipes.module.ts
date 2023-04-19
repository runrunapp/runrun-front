import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './price.pipe';
import { ListingSwiperPipe } from './listing-swiper.pipe';
import { IsFavoritePipe } from './is-favorite.pipe';
import { IsSharedOnRunroomiePipe } from './is-shared-on-runroomie.pipe';
import { HasCitePipe } from './has-cite.pipe';



@NgModule({
  declarations: [PricePipe, ListingSwiperPipe, IsFavoritePipe, IsSharedOnRunroomiePipe, HasCitePipe],
  imports: [
    CommonModule
  ],
  exports: [PricePipe, ListingSwiperPipe, IsFavoritePipe, IsSharedOnRunroomiePipe, HasCitePipe]

})
export class PipesModule { }
