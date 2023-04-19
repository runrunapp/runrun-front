import { Action, createReducer, on } from '@ngrx/store';
import * as InformationFeatureActions from './information-feature.actions';

export const informationFeatureFeatureKey = 'informationFeature';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(InformationFeatureActions.loadInformationFeatures, state => state),

);

