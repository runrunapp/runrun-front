import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { map } from 'rxjs/operators';
import { URLs } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  private isAuthenticated = false;

  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store
    .pipe(select(AuthenticationSelectors.selectIsLoggedIn), map(
      logged => {
        if(!logged) {
          return true
        }
        return this.router.parseUrl(URLs.landingPageURL)
      }
    ));
  }

}
