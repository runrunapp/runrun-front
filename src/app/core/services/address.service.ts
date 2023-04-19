import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { State } from 'src/app/root-store/address-store/address.models';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getStates() {
    return this.http.get<State[]>(this.BASE_URL + 'address/');
  }
}
