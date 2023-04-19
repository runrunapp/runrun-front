import { ListingCollectionModule } from './../../listing-collection/listing-collection.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingSwipeComponent } from './landing-swipe.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [LandingSwipeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ListingCollectionModule,
  ],
  exports: [LandingSwipeComponent],
})
export class LandingSwipeModule {}
