import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as LoginPageActions from './login.actions';
type AuthServices = {};

@Injectable()
export class LoginEffects {
  login$ = createEffect(() => this.actions$.pipe(ofType()));

  constructor(private actions$: Actions, private authServices: AuthServices) {}
}
