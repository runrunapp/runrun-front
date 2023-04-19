import { map } from 'rxjs/operators';
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
import { URLs } from 'src/app/app.constants';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';

@Injectable({
  providedIn: 'root',
})
export class PublishGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.pipe(
      select(AuthenticationSelectors.selectIsLoggedIn),
      map((value) => {
        if (value) {
          return true;
        }
        this.router.navigateByUrl(URLs.loginURL);
        return false;
      })
    );
  }
}
