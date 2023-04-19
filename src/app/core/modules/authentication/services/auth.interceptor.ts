import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = AuthenticationService.getToken();
    if (token === null) {
      return next.handle(request);
    }
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Token ${token}`,
      },
    });
    return next.handle(authRequest);
  }
}
