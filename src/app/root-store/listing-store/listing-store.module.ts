import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ListingReducer, ListingConstants } from '.';
import { EffectsModule } from '@ngrx/effects';
import { ListingEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ListingConstants.listingFeatureKey, ListingReducer),
    EffectsModule.forFeature([ListingEffects,])
  ],
  providers: [ListingEffects]
})
export class ListingStoreModule { }
