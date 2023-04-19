import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { User } from '../authentication.models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private BASE_URL = environment.apiUrl;

  private CLIENT_ID =
    '615081179774-h8nct9s3egt2q5lp0j6f2874o39nrp84.apps.googleusercontent.com';

  constructor(private http: HttpClient) {}

  static getToken(): string | null {
    let token: string | null = sessionStorage.getItem('token');
    if (token === null) {
      token = localStorage.getItem('token');
    }
    return token;
  }

  requestUser(): Observable<User> {
    const url = `${this.BASE_URL}dj_rest_auth/user/`;
    return this.http.get<User>(url).pipe(
      map((user) => ({
        ...user,
        profile: {
          ...user.profile,
          birthday: new Date(user.profile.birthday),
        },
      }))
    );
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}dj_rest_auth/login/`;
    return this.http.post(url, { email, password });
  }

  signup(
    email: string,
    password1: string,
    password2: string,
    firstName: string,
    lastName: string
  ): Observable<any> {
    const url = `${this.BASE_URL}dj_rest_auth/registration/`;
    return this.http.post(url, {
      email,
      password1,
      password2,
      firstName,
      lastName,
    });
  }

  saveUser(key: string, keepLogin: boolean): void {
    if (keepLogin) {
      localStorage.setItem('token', key);
    } else {
      sessionStorage.setItem('token', key);
    }
  }
  removeUser(): void {
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');
  }

  loginWithGoogle(access_token: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}users/social/google-oauth2/`, {
      access_token,
    });
  }

  resetPasswordRequest(email: string) {
    return this.http.post(`${this.BASE_URL}dj_rest_auth/password/reset/`, {
      email,
    });
  }

  resetPasswordConfirm(
    newPassword1: string,
    newPassword2: string,
    uidb64: string,
    token: string
  ) {
    return this.http.post(
      `${this.BASE_URL}dj_rest_auth/password/reset/confirm/`,
      {
        newPassword1: newPassword1,
        newPassword2: newPassword2,
        uid: uidb64,
        token,
      }
    );
  }

  public verifyEmail(key: string): Observable<any> {
    return this.http.post(
      `${this.BASE_URL}dj_rest_auth/registration/verify-email/`,
      {
        key,
      }
    );
  }
}
