import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InformationRoutingModule } from "./information-routing.module";
import { HomePageComponent } from "./homepage/homepage.component";
import { StoreModule } from '@ngrx/store';
import * as fromInformationFeature from '../../../information-feature.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InformationFeatureEffects } from '../../../information-feature.effects';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, InformationRoutingModule, StoreModule.forFeature(fromInformationFeature.informationFeatureFeatureKey, fromInformationFeature.reducer), EffectsModule.forFeature([InformationFeatureEffects])],
})
export class InformationModule {}
