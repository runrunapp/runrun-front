import { ListingSwiperModule } from './../listing-swiper/listing-swiper.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingCollectionComponent } from './listing-collection.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ListingCollectionComponent],
  imports: [CommonModule, FlexLayoutModule, ListingSwiperModule],
  exports: [ListingCollectionComponent],
})
export class ListingCollectionModule {}
