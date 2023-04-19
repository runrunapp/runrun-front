import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState, AuthenticationActions } from 'src/app/root-store';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(AuthenticationActions.logoutRequest());
  }
}
