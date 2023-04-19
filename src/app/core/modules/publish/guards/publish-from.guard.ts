import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, PublishSelectors } from 'src/app/root-store';

@Injectable({
  providedIn: 'root',
})
export class PublishFromGuard implements CanLoad {
  private hasPlanType = false;
  constructor(private store: Store<AppState>, private router: Router) {
    this.store
      .select(PublishSelectors.selectPlanType)
      .subscribe(
        (planType) => (this.hasPlanType = planType.value !== undefined)
      );
  }
  canLoad(route: Route): boolean {
    if (!this.hasPlanType) {
      this.router.navigate(['/', 'home', 'publish']);
      return false;
    }
    return true;
  }
}
