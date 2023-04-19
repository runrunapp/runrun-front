import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { exhaustMap, catchError, map, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthenticationService } from '../../core/modules/authentication/services/authentication.services';
import { ToastrService } from 'ngx-toastr';
import {
  loginRequest,
  loginFailed,
  loginFulfilled,
  logoutRequest,
  logoutFulfilled,
  logoutFailed,
  signupRequest,
  signupFulfilled,
  signupFailed,
  checkToken,
  setUserLoggedIn,
  setUserNotLoggedIn,
  updateUser,
} from './authentication.actions';
import { ChatService } from 'src/app/core/modules/chat/chat.service';
import { URLs } from 'src/app/app.constants';

@Injectable()
export class AuthenticationEffects implements OnInitEffects {
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequest),

      exhaustMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          switchMap((user) => {
            this.authService.saveUser(user.key, action.keepLogin);
            return this.authService.requestUser().pipe(
              map((user) => {
                return loginFulfilled({ user });
              }),
              catchError((error) => {
                return of(loginFailed({ error }));
              })
            );
          }),
          catchError((error) => {
            return of(loginFailed({ error }));
          })
        )
      )
    )
  );
  loginFulfilled$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFulfilled),
        tap((action) => {
          this.chatService.connect();

          this.toastrService.success('Inicio de sesión satisfactorio');
          this.router.navigateByUrl(URLs.landingPageURL);
        })
      ),
    { dispatch: false }
  );
  loginFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFailed),
        tap((action) => {
          if (action.error.status === 400) {
            this.toastrService.error('Usuario o contraseña incorrectos');
          } else {
            this.toastrService.error(
              'Ocurrio un error inesperado: ',
              action.error.message
            );
          }
        })
      ),
    { dispatch: false }
  );
  logoutRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutRequest),
      exhaustMap((action) => {
        this.authService.removeUser();
        return of(logoutFulfilled());
      })
    )
  );
  logoutFulfilled$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutFulfilled),
        tap((action) => {
          this.toastrService.success('Se ha cerrado sesión exitosamente');
          this.router.navigateByUrl(URLs.landingPageURL);
        })
      ),
    { dispatch: false }
  );
  logoutFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutFailed),
        tap((action) => {
          if (action.error.status === 401) {
            this.toastrService.warning(
              'Usted debe haber iniciado sesión antes de poder cerrarla',
              'Error al cerrar sesión'
            );
          } else {
            this.toastrService.error(
              'Ocurrio un error inesperado: ',
              action.error.message
            );
          }
          this.router.navigate(['']);
        })
      ),
    { dispatch: false }
  );

  signupRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signupRequest),
      exhaustMap((action) =>
        this.authService
          .signup(
            action.email,
            action.password1,
            action.password2,
            action.firstName,
            action.lastName
          )
          .pipe(
            map((response) => {
              return signupFulfilled();
            }),

            catchError((error) => {
              return of(signupFailed({ error }));
            })
          )
      )
    )
  );

  userProfileForm = URLs.userProfileFormURL;
  verificationURL = URLs.verificationURL;
  signupFulfilled$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signupFulfilled),
        tap((action) => {
          // this.toastrService.success('');
          this.router.navigate([this.verificationURL]);
        })
      ),
    { dispatch: false }
  );
  signupFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signupFailed),
        tap((action) => {
          if (action.error.status === 400) {
            this.toastrService.error('Usuario o contraseña incorrectos');
          } else {
            this.toastrService.error(
              'Ocurrio un error inesperado: ',
              action.error.message
            );
          }
        })
      ),
    { dispatch: false }
  );
  updateUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      exhaustMap(() =>
        this.authService.requestUser().pipe(
          map((user) => {
            return setUserLoggedIn({ user });
          }),
          catchError((err) => {
            return of({ type: 'No action' });
          })
        )
      )
    )
  );
  checkToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkToken),
      exhaustMap(() =>
        this.authService.requestUser().pipe(
          map((user) => {
            this.chatService.connect();

            return setUserLoggedIn({ user });
          }),
          catchError((err) => {
            return of(setUserNotLoggedIn());
          })
        )
      )
    )
  );
  checkTokenLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setUserNotLoggedIn),
        tap((action) => {
          this.authService.removeUser();
          this.chatService.disconnect();
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthenticationService,
    private toastrService: ToastrService,
    private chatService: ChatService
  ) {}

  ngrxOnInitEffects() {
    return checkToken();
  }
}
