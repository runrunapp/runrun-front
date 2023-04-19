import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  take,
  withLatestFrom,
} from 'rxjs/operators';
import { UsersService } from 'src/app/core/modules/user-profile/users.service';
import { UsersActions, UsersSelectors } from '.';
import { AppState } from '..';

@Injectable()
export class UsersEffects {
  fetchUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.fetchUser),
      mergeMap((action) => {
        return this.usersService.fetchUser(action.id).pipe(
          map((user) => UsersActions.fetchUserFulfilled({ user })),
          catchError((error) => of(UsersActions.fetchUserFailed({ error })))
        );
      })
    )
  );

  requestUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.requestUser),
      exhaustMap((action) =>
        this.store.pipe(
          select(UsersSelectors.selectUserById(action.id)),
          take(1),
          map((user) => {
            if (user === null || user === undefined) {
              return UsersActions.fetchUser({ id: action.id });
            } else {
              return { type: 'NO_ACTION' };
            }
          })
        )
      )
    )
  );
  checkForSelectedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.selectUserById),
      withLatestFrom(
        this.store.pipe(select(UsersSelectors.selectSelectedUser))
      ),
      map(([action, value]) => {
        if (value === undefined || value === null) {
          return UsersActions.fetchUser({ id: action.id });
        }
        return { type: 'NO_ACTION' };
      })
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private store: Store<AppState>
  ) {}
}
