import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as InformationFeatureActions from './information-feature.actions';


@Injectable()
export class InformationFeatureEffects {


  loadInformationFeatures$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(InformationFeatureActions.loadInformationFeatures),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) {}

}
