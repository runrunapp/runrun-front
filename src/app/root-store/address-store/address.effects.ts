import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, switchMap } from 'rxjs/operators';
import { AddressService } from 'src/app/core/services/address.service';
import { AddressActions } from '.';

@Injectable()
export class AddressEffects {
  fetchStatesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddressActions.requestStates),
      exhaustMap((action) =>
        this.addressService.getStates().pipe(
          switchMap((states) => {
            return of(AddressActions.requestStatesFullfiled({ states }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private addressService: AddressService
  ) {}
}
