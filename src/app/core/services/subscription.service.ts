import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  subscribe(email: string) {
    return this.http.post(`${this.BASE_URL}subscriptions/subscribe/`, {
      email,
    });
  }
}
