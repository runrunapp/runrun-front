import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URLs } from 'src/app/app.constants';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';

@Injectable({
  providedIn: 'root',
})
export class ProfileGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (route.toString() === URLs.verificationURL) {
      return true;
    }
    return this.store.pipe(
      select(AuthenticationSelectors.selectUser),
      map((user) => {
        if (user !== null) {
          const p = 0;

          if (
            user.firstName.length > 0 &&
            user.lastName.length > 0 &&
            user.profile.birthday !== null &&
            user.profile.gender !== null &&
            user.profile.presentation !== null
          ) {
            return true;
          }

          return this.router.parseUrl(URLs.userProfileFormURL);
        }

        return true;
      })
    );
  }

  constructor(private store: Store<AppState>, private router: Router) {}
}
