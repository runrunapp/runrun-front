import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { take, map, exhaustMap } from 'rxjs/operators';
import { AppState, AuthenticationSelectors } from 'src/app/root-store';
import { environment } from 'src/environments/environment';
import { User } from '../authentication/authentication.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersAPIUrl = environment.apiUrl + 'users/';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  fetchUser(id: number) {
    return this.http.get<User>(this.usersAPIUrl + id + '/');
  }

  updateUser(id: number, formData: FormData) {
    return this.http.patch<User>(this.usersAPIUrl + id + '/', formData);
  }
  updateCurrentUser(formData: FormData): void {
    this.store
      .pipe(select(AuthenticationSelectors.selectUser), take(1))
      .subscribe((user) => {
        this.http
          .patch<User>(this.usersAPIUrl + user?.id + '/', formData)
          .subscribe
          // TODO handle subscription
          ();
      });
  }
}
