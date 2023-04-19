import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInformationFeature from './information-feature.reducer';

export const selectInformationFeatureState = createFeatureSelector<fromInformationFeature.State>(
  fromInformationFeature.informationFeatureFeatureKey
);
